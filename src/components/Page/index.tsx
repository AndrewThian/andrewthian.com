import { FC, ReactElement } from 'react'

type PageProps = {
  children: React.ReactNode
}

const Page: FC<PageProps> = ({ children }): ReactElement => {
  return (
    <>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  )
}

export { Page }
