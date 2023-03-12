import React, { useState, useCallback, useTransition, Suspense } from 'react'
import SearchInput from './Search.Input'

const SearchComponent = React.lazy(() => import('./Search'))

const Search = () => {
  const [, startTransition] = useTransition()
  const [searchLoaded, setSearchLoaded] = useState()

  const loadSearchModule = useCallback(() => {
    startTransition(() => {
      setSearchLoaded(true)
    })
  })

  const loadSearch = useCallback(() => {
    loadSearchModule()
  })

  return searchLoaded ? (
    <Suspense fallback={null}>
      <SearchComponent isFocused={true} />
    </Suspense>
  ) : (
    <SearchInput loadSearch={loadSearch} />
  )
}

export default Search
