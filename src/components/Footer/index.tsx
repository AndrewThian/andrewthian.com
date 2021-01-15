import { FC } from 'react'
import styled from 'styled-components'
import { CenteredColumn } from '~/components/Layouts'
import { linksMapping, activePath, IlinksMapping } from '~/components/Header/constants'
import Link from 'next/link'

const InnerCtn = styled.footer`
  border-top: 1px solid #e4e4e7;
  background-color: #f4f4f5;
  font-weight: 600;
  line-height: 24px;
  padding: 6rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;

  @media (min-width: 640px) {
    background-color: unset;
    grid-template-columns: repeat(3, 1fr);stroke-width
  }
`

const StyledLink = styled.a`
  @media (min-width: 640px) {
    :hover {
      text-decoration: underline;
    }
  }
`

const AppLinks: FC = () => (
  <>
    {Object.keys(linksMapping)
      .map((link) => ({
        path: activePath(link),
        label: linksMapping[link as keyof IlinksMapping],
      }))
      .map(({ path, label }) => (
        <Link key={path} href={path} passHref>
          <StyledLink>{label}</StyledLink>
        </Link>
      ))}
  </>
)

const Footer: FC = () => (
  <CenteredColumn padding={false}>
    <InnerCtn>
      <AppLinks />
      <Link href="https://linkedin.com/andrewthian" passHref>
        <StyledLink>Linkedin</StyledLink>
      </Link>
      <Link href="https://github.com/AndrewThian" passHref>
        <StyledLink>Github</StyledLink>
      </Link>
      <Link href="https://www.behance.net/andrewbobb284f" passHref>
        <StyledLink>Behance</StyledLink>
      </Link>
      <Link href="https://twitter.com/andrewthian" passHref>
        <StyledLink>Twitter</StyledLink>
      </Link>
    </InnerCtn>
  </CenteredColumn>
)

export default Footer
