import ServerLister from "./components/Server_Lister";
import ServerConfig from "./components/Server_Config";
import NavBar from "./components/NavBar";

export default function Dashboard () {

document.body.classList.add("text-white")

/* Dashboard [Parent] */



	document.body.title="DMS - Dashboard";

return(
	<>
	<NavBar/>
<div className="flex items-center justify-center">
	 <ServerLister/> {/* TODO: Finish Me */}


	<ServerConfig/> {/* TODO: Finish Me */}


</div>
	</>
);
}
