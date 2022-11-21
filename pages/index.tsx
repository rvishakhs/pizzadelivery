import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-rose-300/50 to-white h-screen">
      <Head>
        <title>Petite Pizza Co </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main>
        <h1>HI everybody</h1>
      </main>
    </div>
  )
}

export default Home
