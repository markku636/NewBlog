import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@elegantstack/flow-ui-theme/src/theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Helmet } from 'react-helmet'

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

const loadClarityJs = ()=>{
  return (<script type="text/javascript" dangerouslySetInnerHTML={{__html: (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.loadClarityJs.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "loadClarityJs", "script", "h6t6k0bky8")}}>
 
</script>)
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

      <script src='https://assets.salesmartly.com/js/project_14754_15283_1681818583.js'></script>
      <link rel='canonical' href='http://https://blog.markkulab.net/' />
      {loadClarityJs()}
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
