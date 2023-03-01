import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import StatsCard from "@/components/StatsCard";
import DeleteServerBtn from "@/components/DeleteServer";


export default function Client () {
	const router = useRouter()
	return(<>
		<Head>
		<title>Client</title>
		</Head>
		<main>
		<div className="p-1 my-2 text-center text-white bg-red-500 rounded">Client Id: {router.query.client}</div>
		<div  className="h-[60vh] p-1 rounded text-sm bg-gray-700 overflow-y-scroll text-white">
		<span>Shell: </span>
		</div>
		<div id="status" className="flex flex-col items-center justify-center mt-2 text-center md:space-x-4 space-y-4 md:space-y-0 md:flex-row">
		<StatsCard name="CPU" percent="89" color="green" />
		<StatsCard name="Memory" percent="71" color="red" />
		<StatsCard name="Disk" percent="36" color="blue" />
		<StatsCard name="Network" percent="29" color="yellow" />

		</div>
		<DeleteServerBtn Slugid={router.query.client}/>
		</main>
		</>)}

