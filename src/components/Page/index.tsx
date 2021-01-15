import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

type PageProps = {
  children: React.ReactNode
}

const Section = styled.section`
  padding: 128px 0;
`

const Page: FC<PageProps> = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  )
}

type PageHeaderProps = {
  title: string
  subtitle: string
}

const HeaderContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  row-gap: 0.6rem;
`

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  font-weight: 800;
`
const Subtitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
`

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeaderContainer>
)

export { Page, PageHeader }
