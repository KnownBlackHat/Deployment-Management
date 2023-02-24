import React from "react";
import Navbar from "./components/NavBar";
import Head  from "next/head";

export default function Dashboard () {

return ( 
	<>
		<Head>
			<title>Dashboard - Config</title>
		</Head>
		<Navbar/>
		<div className="grid grid-cols-1 gap-4 text-center justify-center items-center">
<div>Status 1</div>
<div>Status 2</div>
<div>Status 3</div>
<div>Status 4</div>
		</div>
	</>
)}


