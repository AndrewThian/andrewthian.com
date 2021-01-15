import { PostsOrPages } from '@tryghost/content-api'
import { createContext, FC } from 'react'

const PostsContext = createContext<PostsOrPages | undefined>(undefined)

type PostsProviderProps = {
  value: PostsOrPages
}

const PostsProvider: FC<PostsProviderProps> = ({ children, value }) => {
  if (!value) throw Error('No value provided')
  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

export { PostsContext, PostsProvider }
