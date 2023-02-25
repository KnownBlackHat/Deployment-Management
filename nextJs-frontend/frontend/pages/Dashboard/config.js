import React from "react";
import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";

export default function Dashboard () {

return ( 
	<>
		<Head>
			<title>Dashboard - Config</title>
		</Head>
		<Navbar/>
		<div className="grid grid-cols-1 gap-4 text-center justify-center items-center">
	Config 1:
	<input className="text-center rounded text-black" type="text"/>
		Config 2: 	<input className="text-center rounded text-black" type="text"/>
		Config 3:	<input className="text-center rounded text-black" type="text"/>
		Config 4:	<input className="text-center rounded text-black" type="text"/>
		</div>
	</>
)}


