import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="DMS - Deployment Management Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

	  <main className='h-screen w-screen text-center flex justify-center items-center text-4xl'>
		<Link href="Dashboard"><button className='bg-gray-800 rounded p-2'>Dashboard</button></Link>
     </main>
    </>
  )
}
