import React from 'react'
import { Box } from 'theme-ui'
import Navigation from '@components/Navigation'
import Drawer from '@components/Drawer'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import { useAllPosts } from '@helpers-blog'


const styles = {
  desktopMenu: {
    display: [`none`, null, `block`]
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  },
  desktopMenuWrapper: {
    justifyContent: 'flex-end'
  }
}

export const HeaderMenu = ({ mobileMenu = {} }) => {
  const { headerMenu } = useSiteMetadata()

  const allPost = useAllPosts()

  if (mobileMenu && mobileMenu.items) {
    mobileMenu.items = mobileMenu.items.map(function (
      menu
    ) {
      menu.totalCount = allPost?.filter(
        z => z.category && z.category?.name === menu.name
      ).length
  
      return menu
    })
  }

  const desktopMenuNav = (
    <Navigation
      variant='horizontal'
      items={headerMenu}
      wrapperStyle={styles.desktopMenuWrapper}
    />
  )

  const mobileMenuNav = (
    <Drawer>
      <Navigation
        variant='vertical'
        headingProps={{ variant: 'h3' }}
        items={[
          {
            title: 'Main Menu',
            items: headerMenu
          },
          mobileMenu
        ]}
      />
    </Drawer>
  )

  return (
    <>
      <Box sx={styles.desktopMenu}>{desktopMenuNav}</Box>
      <Box sx={styles.mobileMenu}>{mobileMenuNav}</Box>
    </>
  )
}
