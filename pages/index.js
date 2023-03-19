import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Search from '@/components/search'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ results }) {
  // console.log(results)
  return (
    <>
      <Head>
        <title>Coinwatch by Zapit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search results={results} />
      <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {
  const request = await fetch
    (`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&include_platform=true`)
    .then((res) => res.json());

  return {
    props: {
      results: request,
    }
  }
}