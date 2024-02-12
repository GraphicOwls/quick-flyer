/** @format */

'use client'
/** @format */
import { useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import Image from 'next/image'

const FlyerOne = () => {
	const { flyerContent } = useContext(FlyerContext) || {}

	return (
		<div className='flex flex-col items-center justify-center h-full relative'>
			<div className='flex items-center justify-center gap-3 mb-4 text-xl'>
				<span className='font-bold'>{flyerContent?.eventDate}</span>
				<span className=''>at</span>
				<span className='font-bold'>{flyerContent?.time}</span>
			</div>
			<h1 className='text-5xl font-bold text-center'>{flyerContent?.artist}</h1>
			<p className='text-xl font-light mt-2 text-center max-w-md leading-relaxed'>
				{flyerContent?.guestArtists}
			</p>
			<div className='relative w-full'>
				<div className='w-full mask p-6'>
					<Image
						// @ts-ignore
						src={flyerContent?.picture}
						alt='flyer'
						layout='responsive'
						width={600}
						height={500}
						objectFit='cover'
						className='w-full max-h-[400px] rounded-xl'
						id='flyer-image'
					/>
				</div>
			</div>
			<span className='block mb-3'>Live at</span>
			<h2 className='text-4xl font-bold'>{flyerContent?.venueName}</h2>
			<h3 className='text-lg mt-1 font-light'>{flyerContent?.venueMark}</h3>
			<p className='text-lg font-light mt-6 text-center max-w-md leading-relaxed text-primary/60'>
				{flyerContent?.address}
			</p>
		</div>
	)
}

export default FlyerOne
