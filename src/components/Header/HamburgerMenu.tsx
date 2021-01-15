import { FC, useState, useRef, forwardRef, ForwardRefRenderFunction, MutableRefObject } from 'react'
import styled from 'styled-components'
import useClickAway from '~/hooks/useClickAway'
import { classSelector } from '~/utils/DOM'
import { useActiveURL } from './hooks'

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
  width: min-content;
  background-color: grey;
  cursor: pointer;
`

type DropdownProps = {
  handleClose: () => void
  children: React.ReactNode
}

const DropdownRenderFunction: ForwardRefRenderFunction<HTMLDivElement, DropdownProps> = (
  { children, handleClose },
  hamburgerRef: React.Ref<HTMLDivElement>
) => {
  const dropdownRef = useRef(null)
  useClickAway(dropdownRef, (e) => {
    const hamburgerEl = (hamburgerRef as MutableRefObject<HTMLDivElement>).current
    const className = classSelector(hamburgerEl)
    const target = (e.target as HTMLElement).closest(className)

    if (target === hamburgerEl) return
    handleClose()
  })

  return <div ref={dropdownRef}>{children}</div>
}

const Dropdown = forwardRef(DropdownRenderFunction)

const HamburgerMenu: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const { activeLink } = useActiveURL()
  const menuBtnRef = useRef<HTMLDivElement>(null)

  const handleHamburgerToggle = (): void => setOpen((state) => !state)
  const handleHamburgerClose = (): void => setOpen(false)

  return (
    <div>
      <InnerContainer onClick={handleHamburgerToggle} ref={menuBtnRef}>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="14" height="14">
            <path d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z" />
          </svg>
        </Button>
        <span>{activeLink}</span>
      </InnerContainer>

      {isOpen && (
        <Dropdown ref={menuBtnRef} handleClose={handleHamburgerClose}>
          {children}
        </Dropdown>
      )}
    </div>
  )
}

export default HamburgerMenu
