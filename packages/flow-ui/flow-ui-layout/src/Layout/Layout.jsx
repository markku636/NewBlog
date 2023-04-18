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

      <script src="https://assets.salesmartly.com/js/project_14754_15283_1681818583.js"></script>

      <Flex variant='layout.layout'>
        <Global styles={css(theme => theme.global)} />
        <Header />
        <Box variant='layout.body'>{children}</Box>
        <Footer />
      </Flex>
    </pageContextProvider.Provider>
  </ThemeProvider>
)
