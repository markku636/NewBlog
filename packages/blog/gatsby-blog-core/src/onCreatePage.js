const withDefaults = require('./utils/default.options')
const queryMobileMenu = require('./utils/queryMobileMenu')

module.exports = async ({ graphql, page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions
  const { pageContextOptions } = withDefaults(pluginOptions)

  const { createRedirect } = actions

  createRedirect({
    fromPath: `/test999`,
    toPath: `/google-tag-manger-google-analysis-ga4/`
  })

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  deletePage(page)

  // Pass services auto-created pages
  createPage({
    ...page,
    context: {
      ...page.context,
      ...pageContextOptions
    }
  })
}
