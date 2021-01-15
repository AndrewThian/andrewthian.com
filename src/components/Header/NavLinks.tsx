import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { linksMapping, IlinksMapping, activePath } from './constants'
import { useActiveURL } from './hooks'

type StyledLinkProps = {
  readonly isActive: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  white-space: nowrap;
  display: block;
  padding: 1em;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? 'red' : '')};

  :hover {
    background-color: red;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 1em 2em;
    width: min-content;
  }
`

const NavLinks: FC = () => {
  const { activePath: currentActivePath } = useActiveURL()
  return (
    <>
      {Object.keys(linksMapping)
        .map((link) => ({
          path: activePath(link),
          label: linksMapping[link as keyof IlinksMapping],
        }))
        .map(({ path, label }) => (
          <Link key={path} href={path} passHref>
            <StyledLink isActive={currentActivePath === path}>{label}</StyledLink>
          </Link>
        ))}
    </>
  )
}

export default NavLinks
