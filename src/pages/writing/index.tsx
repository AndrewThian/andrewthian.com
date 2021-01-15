import { FC } from 'react'
import { PostsOrPages } from 'tryghost__content-api'
import { GetStaticProps } from 'next'
import { getPosts } from '~/data/posts'
import { CenteredColumn, GridRows } from '~/components/Layouts'
import { Page, PageHeader } from '~/components/Page'
import { List, PostsProvider } from '~/components/Writing'

type Props = {
  posts: PostsOrPages
}

const Writing: FC<Props> = ({ posts }) => (
  <Page>
    <CenteredColumn>
      <GridRows>
        <PageHeader
          title="Paperthoughts"
          subtitle="Textual thoughts from software, self improvement and internal internal monologues"
        />
        <PostsProvider value={posts}>
          <List />
        </PostsProvider>
      </GridRows>
    </CenteredColumn>
  </Page>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts()

  if (!posts) return { notFound: true }
  return { props: { posts } }
}

export default Writing
