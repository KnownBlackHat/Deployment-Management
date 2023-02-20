import ServerLister from "./components/Server_Lister";
import ServerConfig from "./components/Server_Config";

export default function Dashboard () {

/* Dashboard [Parent] */



	document.body.title="DMS - Dashboard";

return(
<div className="flex items-center justify-center">
	 <ServerLister/> {/* TODO: Finish Me */}


	<ServerConfig/> {/* TODO: Finish Me */}


</div>
);
}
