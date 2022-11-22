import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
      <Layout>
        <div className=" h-screen">
          <Head>
            <title>Petite Pizza Co </title>
            <link rel="icon" href="/favicon.png" />
          </Head>

          <main>
          </main>
        </div>
      </Layout>
  )
}

export default Home
