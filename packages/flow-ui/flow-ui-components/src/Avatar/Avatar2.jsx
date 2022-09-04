import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Box, css } from 'theme-ui'
import getImageVariant from '@components/utils/getImageVariant'

//Base size to keep all layers aligned easier
const bs = x => `${x * 0.35}rem`

const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 2,
    textAlign: `center`,
    mb: bs(3)
  },
  pattern: {
    backgroundSize: `8rem`,
    opacity: 0.15
  },
  imageWrapper: {
    height: '240px',
    mx: `auto`,
    img: {
      height: '240px',
      borderRadius: `50%`
    }
  }
}

const Avatar = ({
  avatar,    
  size,
  width,
  loading,
  alt
}) => {
  const image = avatar && getImageVariant(avatar, size)

  if (!image) return null

  width = width || image.width

  return (
    <Box sx={styles.wrapper}>
      <Box>        
        <Img
          image={image}
          alt={alt || 'avatar'}
          loading={loading}
          css={css(styles.imageWrapper)}
        />
      </Box>
    </Box>
  )
}

export default Avatar

Avatar.defaultProps = {
  size: 'regular',
}

Avatar.propTypes = {
  size: PropTypes.oneOf([false, 'small', 'regular']),
  width: PropTypes.number,  
  patternStyles: PropTypes.object,
  loading: PropTypes.string,
  alt: PropTypes.string
}
