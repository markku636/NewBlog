import React, { Suspense } from 'react'
export { PostBody } from './Post.Body'
export { PostFooter } from './Post.Footer'
export { PostHead } from './Post.Head'
export { PostImage } from './Post.Image'
export { PostTagsShare } from './Post.Tags.Share'

const PostCommentsLazy = React.lazy(() => import('./Post.Comments'))
export const PostComments = () => (
  <Suspense fallback={null}>
    <PostCommentsLazy />
  </Suspense>
)

const PostCommentsFacebookLazy = React.lazy(() =>
  import('./Post.Comments.Facebook')
)
export const PostCommentsFacebook = () => (
  <Suspense fallback={null}>
    <PostCommentsFacebookLazy />
  </Suspense>
)

const PostCommentsGraphLazy = React.lazy(() => import('./Post.Comments.Graph'))
export const PostCommentsGraph = () => (
  <Suspense fallback={null}>
    <PostCommentsGraphLazy />
  </Suspense>
)
