import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import NavLinks from './NavLinks'
import HamburgerMenu from './HamburgerMenu'
import { numOfLinks } from './constants'

const baseStyles = css`
  padding: 4px;
`

const MobileContainer = styled.nav`
  ${baseStyles}

  @media (min-width: 768px) {
    display: none;
  }
`
const DesktopContainer = styled.nav`
  ${baseStyles}

  @media (max-width: 768px) {
    display: none;
  }
`

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numOfLinks}, min-content);
  column-gap: 4px;
  justify-content: center;
`

const RowGrid = styled.div`
  display: grid;
  row-gap: 4px;
`

const Header = (): ReactElement => (
  <>
    <MobileContainer>
      <HamburgerMenu>
        <RowGrid>
          <NavLinks />
        </RowGrid>
      </HamburgerMenu>
    </MobileContainer>
    <DesktopContainer>
      <ColumnGrid>
        <NavLinks />
      </ColumnGrid>
    </DesktopContainer>
  </>
)

export default Header
