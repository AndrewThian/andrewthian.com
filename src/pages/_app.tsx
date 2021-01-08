import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { Page } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'

import 'styles/reset.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Page>
      <CenteredColumn>
        <Component {...pageProps} />
      </CenteredColumn>
    </Page>
  )
}

export default MyApp
