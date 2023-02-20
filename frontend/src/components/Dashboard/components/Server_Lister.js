import ServerCard from "./components/Server_Card";

export default function Server_Lister(){

	/* Mapping Done Here of Server_Card */

return (
	
	<>
		<div className="container bg-black items-center justify-center rounded border-2 w-screen overflow-y-scroll h-screen border-white grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4 p-2 gap-5 text-center">
	
	{/* use infinte scroll no next or previous concept should be used*/}

			<ServerCard/>
			<ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> <ServerCard/> 
		</div>
	</>

);

}
