const withDefaults = require('./utils/default.options')
const queryMobileMenu = require('./utils/queryMobileMenu')

module.exports = async ({ graphql, page, actions }, pluginOptions) => {
  const { createPage, deletePage, createRedirect } = actions
  const { pageContextOptions } = withDefaults(pluginOptions)

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  deletePage(page)

  await createRedirect({
    fromPath: '/old-url',
    toPath: '/google-tag-manger-google-analysis-ga4/',
    isPermanent: true
  })

  // Pass services auto-created pages
  createPage({
    ...page,
    context: {
      ...page.context,
      ...pageContextOptions
    }
  })
}
