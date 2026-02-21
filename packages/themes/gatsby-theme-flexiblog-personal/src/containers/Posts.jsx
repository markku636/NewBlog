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
        title='Mark.Ku - 擁有豐富網站開發經驗，直播系統、POS系統、電子商務、平台網站、SEO，專業的軟體開發鐵三工程師。'
        description='Mark Ku 是一位深耕軟體開發 10 年的解決方案架構師。專長涵蓋跨國電商（北美、德國）、直播系統設計、POS 系統、SEO 優化及金流整合。從 Infra 底層到應用層，具備多次帶隊與大規模團隊協作經驗，提供企業級的高可用性架構設計。'
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




