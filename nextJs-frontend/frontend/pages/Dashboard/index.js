import React from "react";
import Link from 'next/link';
import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";

export default function Dashboard () {

	// Dummy Data
	const data = new Array(10).fill({id: 1, name: "Server Name", owner: "Server Owner", status: "online"})


return ( 
		<>
	<Head>
		<title>Dashboard - Server</title>
	</Head>
			<Navbar/>
	<main>
	<div className="bg-white/10 mx-2 p-2 rounded grid grid-cols-1 md:grid-cols-4 items-center justify-center text-center gap-4 overflow-y-scroll">

			{data.map((data, index)=>
				<Link key={index} href={`/Client/${data.id}`}><Servercard obj={data}/></Link>
			)}
	</div>

	</main>
		</>
)}


export function Servercard (props) {
	return(
		<div className={`flex rounded flex-col bg-${props.obj.status==="online"?'green':'red'}-600`}>
			<span>Id: {props.obj.id}</span>
			<span>Name: {props.obj.name}</span>
			<span>Owner: {props.obj.owner}</span>
			<span>Status: {props.obj.status}</span>
		</div>
	)
}
