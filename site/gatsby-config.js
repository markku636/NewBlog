require('dotenv').config({
  path: `.env`,
});

module.exports = {
  flags: {
    DEV_SSR: false
  },
  // developMiddleware: app => {
  //   app.get('/ads.txt', (req, res) => {
  //     res.sendFile(`${__dirname}/static${req.path}`)
  //   })
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-2396931274355535`
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JPN992CSYL", // Google Analytics / GA          
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds        
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,          
          
        },
      },
    },  
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.SITE_URL || 'https://blog.226network.com',
        stripQueryString: true
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mark Ku Technology Blog',
        short_name: 'Mark Ku Blog',
        start_url: process.env.SITE_URL,
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },    
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => process.env.SITE_URL || 'https://blog.226network.com',
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: 'daily',
            priority: 0.7,
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL || 'https://blog.226network.com',
        sitemap: `${process.env.SITE_URL || 'https://blog.226network.com'}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {}
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {                
        sources: {
          local: true
        },
		    siteUrl: process.env.SITE_URL,
        services: {
          facebookComment: true,
          algolia: true
        }
      }
    },
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ], 
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    //General Site Metadata
    title: 'Mark Ku\'s Blog',
    name: 'Mark Ku\'s Blog',
    description: '10年以上豐富網站開發經驗，開發過各種網站，電子商務、平台網站、直播系統、POS系統、SEO 優化、金流串接、AI 串接，Infra 出身，帶過幾次團隊，也加入過大團隊一起開發。',
    address: 'New York, NY',
    email: 'a4756830@gmail.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        "name": "Facebook",
        "url": "https://www.facebook.com/mark.ku.509/"
      },
      {
        "name": "Github",
        "url": "https://github.com/markku636"
      },            
      {
        "name": "Website",
        "url": "https://www.letgo.com.tw/"
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: '首頁',
        slug: '/'
      },
      {
        name: '關於我',
        slug: '/about'
      },
      // {
      //   name: '聯繫我',
      //   slug: '/contact'
      // }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          // {
          //   name: 'Advertise with us',
          //   slug: '/contact'
          // },
          {
            name: '關於我',
            slug: '/about'
          },
          // {
          //   name: 'Contact Us',
          //   slug: '/contact'
          // }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: '隱私權',
            slug: '/'
          },
          {
            name: 'Cookie策略',
            slug: '/'
          },
          // {
          //   name: 'Terms Of Use',
          //   slug: '/'
          // }
        ]
      }
    ]
  }
}
