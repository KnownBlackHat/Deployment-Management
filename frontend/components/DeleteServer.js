import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


export default function DeleteServerBtn ({Slugid}) {
	const router = useRouter()
	const handleClick = () => {
		axios.post("/api/deleteserver",{id: Slugid})
			.then((res)=>{
				if (res.data.success) {
					toast.success('Server Deleted!', { position: "top-right",
						autoClose: 1000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark"}
					);setTimeout(()=> {router.push("/Dashboard")}, 1000)}
				else {
					toast.error(res.error, { position: "top-right",
						autoClose: 1000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark"}
					);

				}
			}, 
				()=>{
					toast.error('Try Again Later!', {
						position: "top-right",
						autoClose: 1000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark"}
					);

				})
	}


	return	<div className="flex items-center justify-center m-2 text-center">
		<button onClick={handleClick} className="p-2 bg-red-600 border-2 rounded">Delete Server</button>
		<ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
		</div>

}
