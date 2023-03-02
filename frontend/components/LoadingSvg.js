import Images from 'next/image';
import loader from "@/public/LoadingSvg.svg";

export default function LoadingSvg() 
{
return (
	<div className='flex items-center justify-center'>
		<Images src={loader} alt="Loading" className='w-[5em]' />
	</div>

	)
}
