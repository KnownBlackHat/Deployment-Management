import Link from "next/link"
import {FaServer} from "react-icons/fa"
import {SlSettings} from "react-icons/sl"
import {HiOutlineStatusOnline} from "react-icons/hi"

export default function Navbar ({ homePage }) {
return (
	<nav className="mb-4 text-3xl text-white rounded bg-white/20">
	<ul className="flex items-center justify-between p-4 mx-6 space-x-4">
		<Link href={"/Client/"+homePage}>
			<li><FaServer/></li>
		</Link>
		<Link href={"/Client/"+homePage+"/fileupload"}>
			<li><HiOutlineStatusOnline/></li>
		</Link>
		<Link href={"/Client/"+homePage+"/config"}>
			<li><SlSettings/></li>
		</Link>
	</ul>
</nav>
)}
