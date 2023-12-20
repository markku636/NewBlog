import React from 'react'
import { Layout, Stack, Hero, Main, Sidebar, PreFooter } from '@layout'
import CardList from '@components/CardList'
import Sticky from '@components/Sticky'
import Divider from '@components/Divider'
import Pagination from '@components/Pagination'
import Seo from '@widgets/Seo'
import Categories from '@widgets/Categories'
import Tags from '@widgets/Tags'
import NewsletterCompact from '@widgets/NewsletterCompact'
import Social from '@widgets/Social'
import HeroComponent from '../components/Hero/Hero'
import { useBlogTags, useBlogCategories, useAllPosts } from '@helpers-blog'



const Posts = ({ data: { paginatedPosts = {} }, ...props }) => {
  const { pageContext: { services = {}, basePath } = {} } = props
  const tags = useBlogTags()
  let categories = useBlogCategories()
  const allPost = useAllPosts()
  categories = categories.map(function (category) {
    category.totalCount = allPost?.filter(
      z => z.category && z.category?.id === category.id
    ).length
    return category
  })
  
  
  return (
    <Layout {...props}>
      <Seo
        title='Mark.Ku - 擁有豐富網站開發經驗，直播系統、POS系統、電子商務、平台網站、SEO，專業的網站開發鐵三工程師。'
        description='Hi, I’m Mark.Ku. 我是一位網頁軟體工程師，我是一位網頁軟體工程師，8年以上豐富網站開發經驗，開發過各種網站，直播系統、POS系統、電子商務、平台網站、SEO、金流串接、Infra 出身，近8年都從事軟體開發，帶過幾次團隊，目前專注於北美及德國市場電商網站開發團隊。'        
      />
      <Hero sx={{ bg: `contentBg` }}>
        <HeroComponent {...props} />
      </Hero>
      <Divider />
      <Stack>
        <Main>
          <CardList
            variant={['horizontal-md', 'horizontal']}
            title='近期文章'
            nodes={paginatedPosts.nodes}
            columns={[1]}
          />
          <Divider />
          <Pagination {...paginatedPosts.pageInfo} basePath={basePath} />
        </Main>
        <Sidebar>
          <Categories categories={categories} />
          <Divider />
          <Tags tags={tags} />
          <Divider />
          {/* <Social /> */}
          <Sticky>
            {services.mailchimp && (
              <>
                <Divider />
                <NewsletterCompact />
              </>
            )}
          </Sticky>
        </Sidebar>
      </Stack>
      <Divider />
      <PreFooter></PreFooter>
    </Layout>
  )
}

export default Posts




