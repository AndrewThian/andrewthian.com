import { FC, ReactElement } from 'react'
import Header from '~/components/Header'

type PageProps = {
  children: React.ReactNode
}

const Page: FC<PageProps> = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  )
}

export { Page }
