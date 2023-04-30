import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Head>
        <title>Syjalo</title>
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
