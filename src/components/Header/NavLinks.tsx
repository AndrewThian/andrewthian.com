import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import { linksMapping, IlinksMapping } from './constants'

type LabelProps = {
  readonly isActive: boolean
}

const Label = styled.span<LabelProps>`
  display: block;
  padding: 1em 2em;
  width: min-content;
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? 'red' : '')};

  :hover {
    background-color: red;
    cursor: pointer;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
`

const NavLinks: FC = () => {
  const router = useRouter()
  return (
    <>
      {Object.keys(linksMapping)
        .map((link) => ({
          path: `/${link !== 'home' ? link : ''}`,
          label: linksMapping[link as keyof IlinksMapping],
        }))
        .map(({ path, label }) => (
          <Label key={path} isActive={router.pathname === path}>
            <Link href={path} passHref>
              <StyledLink>{label}</StyledLink>
            </Link>
          </Label>
        ))}
    </>
  )
}

export default NavLinks
