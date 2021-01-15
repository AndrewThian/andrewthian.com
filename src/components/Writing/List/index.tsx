import Link from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { usePosts } from '../hooks'

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  row-gap: 1rem;
`

const Article = styled.article`
  display: grid;
  grid-template-rows: auto;
  row-gap: 4px;
`

const StyledLink = styled.a`
  line-height: 24px;
  font-weight: 600;
`
const Excerpt = styled.p`
  line-height: 24px;
`
const SubTextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  column-gap: 1rem;
`

const baseSubTextCSS = css`
  white-space: nowrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #52525b;
`

const ReadingTime = styled.span`
  ${baseSubTextCSS}
`
const CreatedAt = styled.span`
  ${baseSubTextCSS}
`

const List: FC = () => {
  const posts = usePosts()
  return (
    <Container>
      {posts.map(({ title, excerpt, reading_time, slug, created_at }) => (
        <Article key={slug}>
          <Link href={`/writing/${encodeURIComponent(slug)}`} passHref>
            <StyledLink>{title}</StyledLink>
          </Link>
          <Excerpt>{excerpt}</Excerpt>
          <SubTextContainer>
            {reading_time && (
              <ReadingTime>{`${reading_time} min${reading_time > 1 ? 's' : ''}`}</ReadingTime>
            )}
            {created_at && <CreatedAt>{created_at}</CreatedAt>}
          </SubTextContainer>
        </Article>
      ))}
    </Container>
  )
}

export default List
