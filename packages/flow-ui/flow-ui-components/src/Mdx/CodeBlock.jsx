import React, { Suspense } from 'react'
import { Styled } from 'theme-ui'

export const Prism = React.lazy(() => import('@theme-ui/prism'))

const CodeBlock = props => (
  // eslint-disable-next-line react/jsx-pascal-case
  <Suspense fallback={<Styled.pre>{props.children}</Styled.pre>}>
    <Prism {...props} />
  </Suspense>
)

export default CodeBlock
