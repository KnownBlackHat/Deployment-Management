import Navbar from "../../components/Dashboard/NavBar"
import Head  from "next/head";
import StatsCard from "@/components/StatsCard";
import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
 

export default function Dashboard () {

return ( 
	<>
		<Head>
			<title>Dashboard - Status</title>
		</Head>
		<Navbar/>

	<SockStat/>
	{JSON.parse(process.env.NEXT_PUBLIC_WS_URL).map(url => {
		return ( <SockStat key={url} WSURL={url}/> )
	})}
	</>
)}

export function SockStat ({WSURL}) {

	const [Data, setData] = useState({})
	const socket = useRef()
useEffect(() => {
	const func = async () => {
	socket.current = io(WSURL);

	// socket.current.on("connect", () => { console.log("Connected to socket") }); // DEBUG

	await socket.current.on("statsres", (data) => { setData(data) });
	setInterval(()=>{socket.current.emit("statsreq")}, 5000)
	}
	func()
}, [])


	return (
		<div className="rounded bg-blue-600/60">
	<ul className="flex flex-wrap justify-between p-4 mx-4 font-bold text-center">
		<li>Host: {Data.hostname}</li>
		<li>Platform: {Data.release}</li>
		<li>Uptime: {Data.uptime}</li>
			
		
	</ul>
	<div id="status" className="flex flex-col items-center justify-center p-2 text-center md:space-x-4 space-y-4 md:space-y-0 md:flex-row">

		<StatsCard name="CPU" percent={Data.cpusUsage} color="green" />
		<StatsCard name="Memory" percent={Data.memUsage} color="red" />
		<StatsCard name="Disk" percent={Data.freeDiskSpace} color="blue" />

		</div>
	</div>
	)

}
