import { AppWrapper } from '../provider'
import Head from 'next/head'
import '../styles'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Head>
        <title>Briquettenesia</title>
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
