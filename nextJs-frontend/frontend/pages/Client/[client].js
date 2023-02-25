import React from "react";
import Head from "next/head";
import Script from "next/script";
import {useRouter} from "next/router";


export default function Client () {
const router = new useRouter()
return (

	<>
		<Head>
			<title>Client</title>
		</Head>
		<Script id="body_style">
			{`document.body.classList.remove('bg-black')`}
		</Script>
		<main className="text-black">
				<div className="p-1 rounded text-center bg-red-500 text-white">Client Id: {router.query.client}</div>
				<div  className="h-[60vh] text-sm bg-black overflow-y-scroll text-white">
					<span>Shell: </span>
				</div>
				<div id="status" className="text-center">
					<span>Status</span>
				</div>
	</main>
	</>

);
}
