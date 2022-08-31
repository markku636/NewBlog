'use strict'

const fs = require('fs-extra')
const path = require('path')
const mime = require('mime-types')
const { categories, authors, articles } = require('../data/data.json')

async function isFirstRun() {
	const pluginStore = strapi.store({
		environment: strapi.config.environment,
		type: 'type',
		name: 'setup',
	})
	const initHasRun = await pluginStore.get({ key: 'initHasRun' })
	await pluginStore.set({ key: 'initHasRun', value: true })
	return !initHasRun
}

async function setPublicPermissions(newPermissions) {
	// Find the ID of the public role
	const publicRole = await strapi
		.query('plugin::users-permissions.role')
		.findOne({
			where: {
				type: 'public',
			},
		})

	// Create the new permissions and link them to the public role
	const allPermissionsToCreate = []
	Object.keys(newPermissions).map((controller) => {
		const actions = newPermissions[controller]
		const permissionsToCreate = actions.map((action) => {
			return strapi.query('plugin::users-permissions.permission').create({
				data: {
					action: `api::${controller}.${controller}.${action}`,
					role: publicRole.id,
				},
			})
		})
		allPermissionsToCreate.push(...permissionsToCreate)
	})
	await Promise.all(allPermissionsToCreate)
}

function getFileSizeInBytes(filePath) {
	const stats = fs.statSync(filePath)
	const fileSizeInBytes = stats['size']
	return fileSizeInBytes
}

function getFileData(fileName) {
	const filePath = path.join('data', 'uploads', fileName)
	// Parse the file metadata
	const size = getFileSizeInBytes(filePath)
	const ext = fileName.split('.').pop()
	const mimeType = mime.lookup(ext)

	return {
		path: filePath,
		name: fileName,
		size,
		type: mimeType,
	}
}

async function uploadFile(file, name) {
	return strapi
		.plugin('upload')
		.service('upload')
		.upload({
			files: file,
			data: {
				fileInfo: {
					alternativeText: `An image uploaded to Strapi called ${name}`,
					caption: name,
					name,
				},
			},
		})
}

// Create an entry and attach files if there are any
async function createEntry({ model, entry }) {
	try {
		// Actually create the entry in Strapi
		await strapi.entityService.create(`api::${model}.${model}`, {
			data: entry,
		})
	} catch (error) {
		console.error({ model, entry, error })
	}
}

async function checkFileExistsBeforeUpload(files) {
	const existingFiles = []
	const uploadedFiles = []
	const filesCopy = [...files]

	for (const fileName of filesCopy) {
		// Check if the file already exists in Strapi
		const fileWhereName = await strapi.query('plugin::upload.file').findOne({
			where: {
				name: fileName,
			},
		})

		if (fileWhereName) {
			// File exists, don't upload it
			existingFiles.push(fileWhereName)
		} else {
			// File doesn't exist, upload it
			const fileData = getFileData(fileName)
			const fileNameNoExtension = fileName.split('.').shift()
			const [file] = await uploadFile(fileData, fileNameNoExtension)
			uploadedFiles.push(file)
		}
	}
	const allFiles = [...existingFiles, ...uploadedFiles]
	// If only one file then return only that file
	return allFiles.length === 1 ? allFiles[0] : allFiles
}

async function importArticles() {
	for (const article of articles) {
		const thumbnail = await checkFileExistsBeforeUpload([`${article.slug}.jpg`])

		await createEntry({
			model: 'article',
			entry: {
				...article,
				thumbnail,
			},
		})
	}
}

async function importCategories() {
	for (const category of categories) {
		const icon = await checkFileExistsBeforeUpload([`${category.slug}.svg`])

		await createEntry({
			model: 'category',
			entry: {
				...category,
				icon,
			},
		})
	}
}

async function importAuthors() {
	for (const author of authors) {
		const thumbnail = await checkFileExistsBeforeUpload([`${author.slug}.png`])

		await createEntry({
			model: 'author',
			entry: {
				...author,
				thumbnail,
			},
		})
	}
}

async function importSeedData() {
	// Allow read of application content types
	await setPublicPermissions({
		article: ['find', 'findOne'],
		category: ['find', 'findOne'],
		author: ['find', 'findOne'],
	})

	// Create all entries
	await importCategories()
	await importAuthors()
	await importArticles()
}

module.exports = async () => {
	const shouldImportSeedData = await isFirstRun()

	if (shouldImportSeedData) {
		try {
			console.log('Setting up the template...')
			await importSeedData()
			console.log('Ready to go')
		} catch (error) {
			console.log('Could not import seed data')
			console.error(error)
		}
	}
}
