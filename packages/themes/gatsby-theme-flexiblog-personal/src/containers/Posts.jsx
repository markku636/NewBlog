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
    category.totalCount = allPost?.filter(z =>  z.category && z.category?.id === category.id).length
    return category
  })

  debugger

  return (
    <Layout {...props}>
      <Seo title='關於我' />
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
