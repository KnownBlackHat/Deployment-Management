import {SlClose} from "react-icons/sl";
import axios from 'axios';
import {useRef, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


export default function AddServerBtn () {
	const router = useRouter()
	const Formref = useRef()
	const [formName, setformName] = useState()
	const [fromOwner, setformOwner] = useState()


	const handleForm = () => {
		Formref.current.classList.toggle("hidden")
		Formref.current.classList.toggle("fixed")
	}
	const handleSubmitFrom = e => {
		e.preventDefault()
		axios.post("/api/addserver",{name: formName, owner: fromOwner, status: "offline"})
			.then((res)=>{
				if (res.data.success) {
					toast.success('Server Created!', { position: "top-right",
						autoClose: 1000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark"}
					);router.push(window.location.pathname)}
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
		<button onClick={handleForm} className="p-2 bg-green-600 border-2 rounded">Add Server</button>

		<form onSubmit={handleSubmitFrom} ref={Formref}  className="inset-0 hidden overflow-y-scroll text-black bg-black body-font">
		<div className='flex justify-end m-4'>
		<SlClose className='text-3xl text-white cursor-pointer'  onClick={()=>{
			Formref.current.classList.toggle("hidden")
			Formref.current.classList.toggle("fixed")
		}}/>
		</div>
		<div className="container px-5 py-24 mx-auto">
		<div className="flex flex-col w-full mb-12 text-center">
		<ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>

		<h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font">Add Server</h1>

		</div>
		<div className="mx-auto lg:w-1/2 md:w-2/3">
		<div className="flex flex-wrap -m-2">
		<div className="w-1/2 p-2">
		<div className="relative">
		<label htmlFor="name" className="text-sm text-gray-400 leading-7">Name</label>
		<input onChange={e=>{setformName(e.target.value)}} type="text" required id="name" name="name" className="w-full px-3 py-1 text-base text-gray-100 bg-gray-800 border border-gray-700 rounded outline-none bg-opacity-40 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 leading-8 transition-colors duration-200 ease-in-out"/>
		</div>
		</div>
		<div className="w-1/2 p-2">
		<div className="relative">
		<label htmlFor="owner" className="text-sm text-gray-400 leading-7">Owner</label>
		<input onChange={e=>{setformOwner(e.target.value)}}  type="text" required id="owner" name="owner" className="w-full px-3 py-1 text-base text-gray-100 bg-gray-800 border border-gray-700 rounded outline-none bg-opacity-40 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 leading-8 transition-colors duration-200 ease-in-out"/>
		</div>
		</div>

		<div className="w-full p-2">
		<button type='submit' className="flex px-8 py-2 mx-auto text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">Add</button>
		</div>
		</div>
		</div>
		</div>
		</form>
		</div>

}
