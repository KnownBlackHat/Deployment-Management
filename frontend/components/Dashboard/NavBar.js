import Link from "next/link"

export default function Navbar () {
return (
	<nav className="bg-white/20 rounded mb-4">
	<ul className="flex p-4 space-x-4 justify-between">
		<Link href="/Dashboard">
			<li>Servers</li>
		</Link>
		<Link href="/Dashboard/config">
			<li>Config</li>
		</Link>
		<Link href="/Dashboard/status">
			<li>Status</li>
		</Link>
	</ul>
</nav>
)}
