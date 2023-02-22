import ServerCard from "./components/Server_Card";

export default function Server_Lister(){

const dummy_array = new Array(100).fill({})

return (
	
	<>
		<div className="bg-black items-center justify-center rounded border-2 w-[100%] overflow-y-scroll h-screen border-white grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-4 p-2 gap-5 text-center">
	
	{/* use infinte scroll no next or previous concept should be used*/}
			{dummy_array.map((item,index)=>(
				<ServerCard key={index} item={item} />
			))}
		</div>
	</>

);

}
