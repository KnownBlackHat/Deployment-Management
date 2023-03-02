import Link from 'next/link';
import Navbar from "@/components/Dashboard/NavBar"
import Head  from "next/head";
import AddServerBtn from '@/components/Dashboard/AddServer';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import LoadingSvg from '@/components/LoadingSvg';

export async function getServerSideProps () {
	const res = await axios.post("http://0.0.0.0/api/getserver",{limit: 50})
	const data = await res.data 

	return { props: {data} }
} 

export default function Dashboard ({data}) {

	const [limit, setLimit] = useState(10)
	const [dbdata, setDbdata] = useState(data)

	const fetchmoredata = async () => 
	{ setDbdata((await axios.post("/api/getserver",{limit: limit+20 })).data); setLimit(lim=>lim+20) }

	return ( 
		<>
		<Head>
		<title>Dashboard - Server</title>
		</Head>
		<Navbar/>
		<main>
		<AddServerBtn Dbdata={{set: setDbdata, data: dbdata}}/>
		<InfiniteScroll
		dataLength={dbdata.data.length} 
		next={ fetchmoredata }
		hasMore={dbdata.next?true:false}
		loader={<LoadingSvg/>}>

		<section className={`items-center justify-center p-2 text-center bg-white/10 rounded ${dbdata.data.length===0? "flex flex-wrap": "grid grid-cols-1 md:grid-cols-3 gap-4 "}`}>
		{dbdata.data.length===0? <span className="text-center">No Servers Found!</span> : dbdata.data.map((data, index)=>
			<div key={index}><Link className='overflow-hidden cursor-pointer' key={index} href={`/Client/${data._id}`}><Servercard obj={data}/></Link></div>
		)}
		</section>
		</InfiniteScroll>
		</main>
		</>
	)}


export function Servercard (props) {
	return(
		<div className={`flex rounded flex-col bg-${props.obj.status==="online"?'green':'red'}-600`}>
		<span>Id: {props.obj._id}</span>
		<span>Name: {props.obj.name}</span>
		<span>Owner: {props.obj.owner}</span>
		<span>Status: {props.obj.status}</span>
		</div>
	)
}



