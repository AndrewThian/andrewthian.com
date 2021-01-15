import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import 'styles/reset.css'
import 'styles/fonts.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
