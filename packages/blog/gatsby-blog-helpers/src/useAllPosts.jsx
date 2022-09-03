import { useStaticQuery, graphql } from 'gatsby'

export const useAllPosts = () => {
  const { recentPosts } = useStaticQuery(allPostsQuery)
  return recentPosts.nodes || null
}

const allPostsQuery = graphql`
  query allArticleQuery(
    $includeExcerpt: Boolean! = true
    $includeTimeToRead: Boolean! = true
    $imageQuality: Int! = 75
  ) {
    recentPosts: allArticle(
      filter: { private: { ne: true }, draft: { ne: true } }
      sort: { fields: [date], order: DESC }      
    ) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }
  }
`
