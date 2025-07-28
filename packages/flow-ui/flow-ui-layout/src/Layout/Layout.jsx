import theme from '@elegantstack/flow-ui-theme/src/theme'
import { Global } from '@emotion/core'
import pageContextProvider from '@helpers/pageContextProvider'
import React from 'react'
import { Box, css, Flex, ThemeProvider } from 'theme-ui'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

export const personSchema = () => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Mark ku',
    url: 'https://blog.markkulab.net/',
    image:
      'https://blog.markkulab.net/static/cbb689972a03a9278c89aab9e19e2d6f/6c33c/hero.webp',
    sameAs: 'https://www.letgo.com.tw',
    jobTitle: 'Senior Softwarer Developer'
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  )
}

export const Layout = ({ children, pageContext, location }) => (
  <ThemeProvider theme={theme}>
    <pageContextProvider.Provider value={{ pageContext, location }}>
      <link
        href='https://cdn.jsdelivr.net/npm/taipei-sans-tc'
        rel='stylesheet'
      />
      <link
        href='https://cdn.jsdelivr.net/npm/taipei-sans-tc/dist/Light/TaipeiSansTCBeta-Light.css'
        rel='stylesheet'
      />
      <link
        href='https://cdn.jsdelivr.net/npm/taipei-sans-tc/dist/Bold/TaipeiSansTCBeta-Bold.css'
        rel='stylesheet'
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2396931274355535"
     crossorigin="anonymous"></script>

      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, u) {
              w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
              var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
              j.async = true; j.src = 'https://chat.226network.com/livechat/rocketchat-livechat.min.js?_=201903270000';
              h.parentNode.insertBefore(j, h);
            })(window, document, 'script', 'https://chat.226network.com/livechat');
          `
        }}
      />

      <link rel='canonical' href='http://https://blog.markkulab.net/' />
      {personSchema()}
      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <Footer />
      </Flex>
    </pageContextProvider.Provider>
  </ThemeProvider>
)
