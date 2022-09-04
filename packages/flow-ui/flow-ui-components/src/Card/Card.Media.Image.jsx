import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { css } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import { isMobile } from '../../../../utils/index'

import { useColorMode } from 'theme-ui'

const CardMediaImage = ({ variant, loading, image, title }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  return (
    <Img
      backgroundColor={isMobile && !isDark ? '#FFFFFF' : ''}
      image={image}
      loading={loading}
      alt={title || 'title'}
      css={css({
        height: `full`,
        verticalAlign: `middle`, //avoid baseline gap
        img: {
          bg: `omegaLighter`
        },
        variant: rv(variant, 'image')
      })}
    />
  )
}

CardMediaImage.defaultProps = {
  loading: 'lazy'
}

export default CardMediaImage
