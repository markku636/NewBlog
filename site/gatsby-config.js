module.exports = {
  flags: {
    DEV_SSR: false
  },

  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        accessToken: '8f76c00b605f741704476b0c9687a634b3595394c6bcd97756e7293e36392d78f383011acb91e14a45049a5b1116894516d609cd3171352bdf2846fc1e0e6e06739d008c143ddf68e23376c9569daae6859f2b1c18c8b748884b9ddd7e3b64d8b3f58406b67f2c898499c4e5b19b1df40a624ee6f2c8b05892ef46b87d6f22fb',
        collectionTypes: ['article', 'category', 'author'],
        queryLimit: 1000
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        sources: {
          strapi: true,
          local: false
        },
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],  
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
