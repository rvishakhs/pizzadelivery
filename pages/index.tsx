import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'
import Service from '../components/Service'


const Home: NextPage = () => {
  return (
        <div>
          <Head>
            <title>Petite Pizza Co </title>
            <link rel="icon" href="/favicon.png" />
          </Head>
         <Header />
          <main className='space-y-6'>
            <Hero />
            <Service />
            <Products />
          </main>
          <Footer />
        </div> 

  )
}

export default Home

export const getServerSideProps : GetServerSideProps = async(context) => {
  const products: products[] = await FetchProducts() 
  return {

  }
}
