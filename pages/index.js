import Head from 'next/head'
import { Logo } from '../components/Logo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvel Characters</title>
        <meta name="description" content="This is a next-js app to demonstrate next-js's features with the Marvel API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Logo />
      </main>
    </div>
  )
}
