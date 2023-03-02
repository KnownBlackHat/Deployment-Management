import Link from 'next/link';
import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";
import AddServerBtn from '@/components/AddServer';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';


export default function Dashboard () {

	const [limit, setLimit] = useState(20)
	const [dbdata, setDbdata] = useState({ data: []})
	useEffect(() => {
		async function getdata () {
			const res = await axios.post("/api/getserver",{limit: limit})
			setDbdata( await res.data )}
		getdata()
	},[])
	return ( 
		<>
		<Head>
		<title>Dashboard - Server</title>
		</Head>
		<Navbar/>
		<main>
		<AddServerBtn Dbdata={{set: setDbdata, data: dbdata}}/>
		<div className="container mx-auto">
		<InfiniteScroll
		dataLength={dbdata.data.length} 
		next={ async () => { setDbdata((await axios.post("/api/getserver",{limit: limit+limit })).data); setLimit(lim=>lim+lim) } }
		hasMore={dbdata.next?true:false}
		loader={<h4>Loading...</h4>}
		endMessage={
			<p style={{ textAlign: 'center' }}>
			<b>Yay! You have seen it all</b>
			</p>}>
		<section className={`items-center justify-center p-2 mx-2 overflow-auto text-center rounded bg-white/10 ${dbdata.data.length===0? "flex flex-wrap": "grid grid-cols-1 md:grid-cols-4 gap-4"}`}>
		{dbdata.data.length===0? <span className="text-center">No Servers Found!</span> : dbdata.data.map((data, index)=>
			<Link className='overflow-hidden cursor-pointer' key={index} href={`/Client/${data._id}`}><Servercard obj={data}/></Link>
		)}
		</section>
		</InfiniteScroll>
		</div>
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



