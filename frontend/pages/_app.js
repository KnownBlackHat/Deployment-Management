// import '@/styles/globals.css'
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from 'next/script'

export default function App({ Component, pageProps }) {
	const router = useRouter()
	const [progress, setProgress] = useState(0)
	useEffect(()=>
		{
			router.events.on('routeChangeStart', ()=>{setProgress(50)})
			router.events.on('routeChangeComplete', ()=>{setProgress(100)})
		}
		,[router.query, router.events])
	return (
		<>
		<Script src="https://cdn.tailwindcss.com" defer />
		<LoadingBar
        color='red'
		waitingTime={500}
		height={3}
		shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
		<Component {...pageProps}/>
		</>
)}
