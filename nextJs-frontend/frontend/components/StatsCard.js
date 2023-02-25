import Script from "next/script"

export default function StatsCard ({name, percent, color}) {
return (
	<>
		<div className="flex items-center justify-center p-4 bg-gray-800 rounded md:h-40">
			<div className="flex flex-col md:flex-row">
				<div className="bg-gray-700 rounded flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
					<div className="flex-col">
						<div className="my-2 text-sm font-medium text-gray-400">{name}</div>
						<div className="flex items-center class">
							<div className={`flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-${color}-500 font-medium`}>
								<div className="text-3xl font-bold">{percent}%</div>
							</div>
						</div>
						<div className="w-full h-0.5 bg-gray-400">
							<div className={`w-[${percent}%] h-0.5 bg-${color}-500`}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Script src="https://kit.fontawesome.com/290d4f0eb4.js"></Script>
		<Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
		<Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
</>)
}
