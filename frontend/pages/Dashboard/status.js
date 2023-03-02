import React from "react";
import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";
import StatsCard from "@/components/StatsCard";

export default function Dashboard () {

return ( 
	<>
		<Head>
			<title>Dashboard - Config</title>
		</Head>

		<Navbar/>
		<div id="status" className="flex flex-col items-center justify-center mt-2 text-center md:space-x-4 space-y-4 md:space-y-0 md:flex-row">
					<StatsCard name="CPU" percent="11" color="green" />
					<StatsCard name="Memory" percent="13" color="red" />
					<StatsCard name="Disk" percent="49" color="blue" />
					<StatsCard name="Network" percent="89" color="yellow" />
		
		</div>
	</>
)}


