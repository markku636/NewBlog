import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Box, css } from 'theme-ui'
import getImageVariant from '@components/utils/getImageVariant'
import MemphisPattern from '@components/MemphisPattern'

//Base size to keep all layers aligned easier
const bs = x => `${x * 0.35}rem`

const styles = {
  wrapperMain: {
    position: `relative`,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: `center`,
    mb: bs(3),
    width: `80%`
  },
  wrapper: {
    position: `relative`,
    zIndex: 2,
    textAlign: `center`,
    mb: bs(3),
    width: `240px`,
    height: `240px`
  },
  pattern: {
    backgroundSize: `16rem`,
    opacity: 0.15,
    width: `100%`
  },
  imageWrapper: {
    mx: `auto`,
    img: {
      borderRadius: `50%`
    }
  },
  circle: ({ width }) => ({
    width: [`full`, `full`],
    height: `full`,
    maxWidth: `100%`,
    borderRadius: `full`,
    position: `absolute`,
    transform: `translate(-50%)  scale(0.98)`,
    left: `50%`,
    top: bs(3),
    bg: `alpha`
  }),
  arc: ({ width }) => ({
    width: [`full`, `full`],
    height: `full`,
    maxWidth: `100%`,
    borderRadius: `full`,
    position: `absolute`,
    zIndex: 2,
    left: `50%`,
    transform: `translate(-50%)`,
    mt: bs(-1),
    ml: bs(-2),
    boxShadow: t => `
			${bs(2)}
			${bs(4)}
			${t.colors.omegaLight}
		`
  })
}

const Avatar = ({ avatar, size, width, loading, alt }) => {
  const image = avatar && getImageVariant(avatar, size)

  if (!image) return null

  width = width || image.width

  return (
    <Box sx={styles.wrapperMain}>
      <MemphisPattern sx={{ ...styles.pattern }} />
      <Box sx={styles.wrapper}>
        <Box sx={styles.circle({ width })}></Box>
        <Box sx={styles.arc({ width })}></Box>
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
  size: 'regular'
}

Avatar.propTypes = {
  size: PropTypes.oneOf([false, 'small', 'regular']),
  width: PropTypes.number,
  patternStyles: PropTypes.object,
  loading: PropTypes.string,
  alt: PropTypes.string
}
