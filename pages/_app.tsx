import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/main.css'

const Nextra = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Nextra
