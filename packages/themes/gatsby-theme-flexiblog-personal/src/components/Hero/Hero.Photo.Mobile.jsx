import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box } from 'theme-ui'
import Avatar from '@components/Avatar/Avatar2'

const styles = {
  wrapper: {
    display: [`none`, `none`, `none`],
    position: `relative`,
    justifyContent: `center`,
    alignItems: `center`,    
    flex: 1,
    width: `100%`,
    '@media(max-width: 788px)': {
      display: [`flex`, `flex`, `flex`],
    }
  },
  pattern: {
    height: `1/2`,
    transform: `translate(0, 50%)`
  }
}

export default () => {
  const data = useStaticQuery(heroQuery)
  const image = data && data.avatar && data.avatar.childImageSharp

  return (
    <Box sx={styles.wrapper}>
      <Avatar avatar={image} loading='eager' />
    </Box>
  )
}

const heroQuery = graphql`
  query HeroMobileQuery {
    avatar: file(absolutePath: { regex: "/hero.(jpeg|jpg|gif|png|webp)/" }) {
      childImageSharp {
        regular: gatsbyImageData(
          width: 240
          height: 240
          transformOptions: { cropFocus: NORTH }
          placeholder: TRACED_SVG
        )
      }
    }
  }
`
