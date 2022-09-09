import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@elegantstack/flow-ui-theme/src/theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Helmet } from 'react-helmet'

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

      <script
        id='first-unique-id'
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="04b00852-a5b2-4c94-b2d1-1f432ce3eac0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
        }}
      />

      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <Footer />
      </Flex>
    </pageContextProvider.Provider>
  </ThemeProvider>
)
