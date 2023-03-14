import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoAddCircleOutline} from "react-icons/io5";
import {useState} from 'react';


export default function Home() {
    const handleSubmitFrom = e => {
        e.preventDefault();
        // TODO: Add axios request to submit login form
    }
    const [formData, setFormData] = useState({})
    const handleFormData = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="DMS - Log In" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

	  <main>
<form onSubmit={handleSubmitFrom} className="overflow-auto 
      text-black bg-black body-font">
		<div className='flex justify-end m-4'>
		</div>
		<div className="container px-5 py-24 mx-auto">
		<div className="flex flex-col w-full mb-12 text-center">
		<ToastContainer position="top-right" autoClose={1000} 
      hideProgressBar newestOnTop closeOnClick rtl={false} 
      pauseOnFocusLoss draggable pauseOnHover theme="dark"/>

		<h1 className="text-2xl font-medium text-white sm:text-3xl 
      title-font">Log In</h1>

		</div>
		<div className="mx-auto lg:w-1/2 md:w-2/3">
		<div className="flex flex-col items-center -m-2">
		<div className="w-1/2 p-2">
		<div className="relative">
		<label htmlFor="email" className="text-sm text-gray-400 
      leading-7">Email</label>
		<input value={formData.email} onChange={handleFormData} type="email"
      required id="email" name="email" className="w-full px-3 py-1 text-base 
      text-gray-100 bg-gray-800 border border-gray-700 rounded outline-none 
      bg-opacity-40 focus:border-green-500 focus:bg-gray-900 focus:ring-2 
      focus:ring-green-900 leading-8 transition-colors 
      duration-200 ease-in-out"/>
		</div>
		</div>
		<div className="w-1/2 p-2">
		<div className="relative">
		<label htmlFor="password" className="text-sm text-gray-400 leading-7">
      Password
      </label>
		<input value={formData.password} onChange={handleFormData}  
      type="password" required id="password" name="owner" className="w-full px-3
      py-1 text-base text-gray-100 bg-gray-800 border border-gray-700 rounded 
      outline-none bg-opacity-40 focus:border-green-500 focus:bg-gray-900 
      focus:ring-2 focus:ring-green-900 leading-8 transition-colors 
      duration-200 ease-in-out"/>
		</div>
		</div>

		<div className="w-full p-2">
		<button type='submit' className="flex px-8 py-2 mx-auto text-lg 
      text-white bg-green-500 mt-4 border-0 rounded focus:outline-none 
      hover:bg-green-600">Submit</button>
		</div>
		</div>
		</div>
		</div>
		</form>
		<Link href="Dashboard"><button className='bg-gray-800 m-2 rounded p-2'>
      Dashboard
      </button></Link>
		<Link href="Client"><button className='bg-gray-800 m-2 rounded p-2'>
      Client</button></Link>

     </main>
    </>
  )
}
