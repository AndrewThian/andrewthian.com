import { PostOrPage, PostsOrPages } from '@tryghost/content-api'
import api from './api'

async function getPosts(): Promise<PostsOrPages | void> {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => console.error(err))
}

async function getPost(slug: string): Promise<PostOrPage | void> {
  return await api.posts.read({ slug }).catch((err) => console.log(err))
}

export { getPosts, getPost }
