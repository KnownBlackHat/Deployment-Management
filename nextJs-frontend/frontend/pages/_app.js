import '@/styles/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {

	return (
		<>
			<Script src='https://cdn.tailwindcss.com' strategy='beforeInteractive'></Script>

			<Component {...pageProps} />
		</>
)}
