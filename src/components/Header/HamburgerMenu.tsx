import { FC, useState, useRef } from 'react'
import styled from 'styled-components'
import useClickAway from '~/hooks/useClickAway'
import { useActiveLink } from './hooks'

const Button = styled.button`
  padding: 0px;
  margin: 0px;
  border: none;
  width: 14px;
  height: 14px;

  cursor: pointer;
`
const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  gap: 1em;
  padding: 1em;
`

const HamburgerMenu: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const { activeLink } = useActiveLink()
  const menuRef = useRef(null)

  const handleHamburgerToggle = (): void => setOpen((state) => !state)
  const handleHamburgerClose = (): void => setOpen(false)

  useClickAway(menuRef, handleHamburgerClose, ['touchstart'])

  return (
    <div ref={menuRef}>
      <InnerContainer>
        <Button onClick={handleHamburgerToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="14" height="14">
            <path d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z" />
          </svg>
        </Button>
        <span>{activeLink}</span>
      </InnerContainer>

      {isOpen && children}
    </div>
  )
}

export default HamburgerMenu
