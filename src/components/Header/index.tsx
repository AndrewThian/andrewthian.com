import { ReactElement } from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import { numOfLinks } from './constants'

const MobileContainer = styled.div``
const DesktopContainer = styled.div``

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numOfLinks}, min-content);
  grid-gap: 4px;
  padding: 4px;
  justify-content: center;
`

const Header = (): ReactElement => (
  <>
    <MobileContainer></MobileContainer>
    <DesktopContainer>
      <ColumnGrid>
        <NavLinks />
      </ColumnGrid>
    </DesktopContainer>
  </>
)

export default Header
