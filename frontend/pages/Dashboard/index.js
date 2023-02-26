import React from "react";
import Link from 'next/link';
import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";
import axios from 'axios';


export async function getServerSideProps() {
  const res = await axios.get("http://0.0.0.0/api/getserver")
  const data = await res.data

  return { props: { data } }
}

export default function Dashboard ({data}) {

	
	// Dummy Data
	// const data = new Array(10).fill({id: 1, name: "Server Name", owner: "Server Owner", status: "online"})


return ( 
		<>
	<Head>
		<title>Dashboard - Server</title>
	</Head>
			<Navbar/>
	<main>
	<section className={`items-center justify-center p-2 mx-2 overflow-y-scroll text-center rounded bg-white/10 ${data.length===0? "flex flex-wrap": "grid grid-cols-1 md:grid-cols-4 gap-4"}`}>

			{data.length===0? <span className="text-center">No Servers Found!</span> : data.map((data, index)=>
				<Link key={index} href={`/Client/${data._id}`}><Servercard obj={data}/></Link>
			)}
	</section>
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
