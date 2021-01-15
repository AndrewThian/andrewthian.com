import { PostsOrPages } from '@tryghost/content-api'
import { useContext } from 'react'
import { PostsContext } from './contexts'

function usePosts(): PostsOrPages {
  const posts = useContext(PostsContext)
  if (posts === undefined) {
    throw Error('use Posts must be used within a PostsProvider')
  }

  return posts
}

export { usePosts }
