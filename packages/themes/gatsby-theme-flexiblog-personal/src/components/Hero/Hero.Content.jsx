import React from 'react'
import { Link } from 'gatsby'
import { Button, Box, Heading, Text } from 'theme-ui'
import Photo from './Hero.Photo.Mobile'
import { useMediaQuery } from 'react-responsive'
// import { isMobile, isTablet } from '../../../../../utils/index'
// const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' })
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
  

  return (
    <>
      <Photo />
      <Heading variant='h1'>
        Hi, I'm <Text sx={styles.author}>Mark Ku</Text>.
      </Heading>
      <Heading variant='h1' sx={styles.occupation}>
        Software Solution Architecture
      </Heading>
      <Heading variant='h3' sx={styles.specialty}>
        十年磨一劍的資深開發者，專精於大規模平台架構與複雜系統設計，從即時直播技術到電商 POS 生態系，橫跨 Web 開發、SEO 與系統架構，致力於建構高性能、高可擴展性的軟體方案。
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
