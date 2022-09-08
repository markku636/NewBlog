const withDefaults = require('./utils/default.options')
const queryMobileMenu = require('./utils/queryMobileMenu')

module.exports = async ({ graphql, page, actions }, pluginOptions) => {
  const { createPage, deletePage } = actions
  const { pageContextOptions } = withDefaults(pluginOptions)

  const { createRedirect } = actions

  // url rewirter
  createRedirect({
    fromPath: `/sitemap.xml`,
    toPath: `/sitemap/sitemap-index.xml`
  })

  createRedirect({
    fromPath: `/2022/01/03/line-messaging-for-uptime-kuma`,
    toPath: `/line-messaging-api-for-uptime-kuma/`
  })

  createRedirect({
    fromPath: `/2022/08/10/apple-pay-on-web-cybersource`,
    toPath: `/apple-pay-on-web-cybersource/`
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
