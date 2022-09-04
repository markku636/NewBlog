import React from 'react'
import { Link } from 'gatsby'
import { Button, Box, Heading, Text } from 'theme-ui'
import Photo from './Hero.Photo.Mobile'
import { isMobile } from '../../../../../utils/index'
import { useMediaQuery } from 'react-responsive'

/**
 * Shadow me to add your own content
 */

const styles = {
  author: {
    display: `inline-block`,
    color: `alpha`
  },
  occupation: {
    mb: 4
  },
  specialty: {
    color: `text`,
    mb: 4
  }
}

export default () => {
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      {isTabletMid && <Photo />}
      <Heading variant='h1'>
        Hi, I'm <Text sx={styles.author}>Mark Ku</Text>.
      </Heading>
      <Heading variant='h1' sx={styles.occupation}>
        Software Developer
      </Heading>
      <Heading variant='h3' sx={styles.specialty}>
        擁有豐富網站開發經驗，直播系統、POS系統、電子商務、平台網站、SEO，專業的網站開發鐵三工程師。
      </Heading>

      {/* <Box variant='buttons.group'>
      <Button as={Link} to='/contact'>
        Contact
      </Button>
      <Button variant='white' as={Link} to='/about'>
        關於我
      </Button>
    </Box> */}
    </>
  )
}
