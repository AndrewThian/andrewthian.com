import { PostOrPage } from '@tryghost/content-api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FC } from 'react'
import { Page } from '~/components/Page'
import { getPost, getPosts } from '~/data/posts'

type Params = {
  slug: string
}

type Props = {
  post: PostOrPage
}

const WritingPost: FC<Props> = ({ post }) => {
  if (!post.html) return <div>missing html</div>

  return (
    <Page>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  if (!posts) return { paths: [], fallback: true }

  const paths = posts.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params || !params?.slug) return { notFound: true }

  const post = await getPost(params.slug)
  if (!post) return { notFound: true }

  return { props: { post } }
}

export default WritingPost
