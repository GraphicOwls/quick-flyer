/** @format */

'use client'
/** @format */
import { useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import Image from 'next/image'

const FlyerOne = () => {
	const { flyerContent } = useContext(FlyerContext) || {}

	return (
		<div className='flex flex-col items-center justify-start p-8'>
			<div className='flex items-center justify-center gap-6 mb-6'>
				<span>{flyerContent?.eventDate}</span>
				<span className='mx-1'>/</span>
				<span>{flyerContent?.time}</span>
			</div>
			<h1 className='text-5xl font-bold text-center'>{flyerContent?.artist}</h1>
			<p className='text-xl font-light mt-4 text-center max-w-md leading-relaxed'>
				{flyerContent?.guestArtists}
			</p>
			<div>
				<Image
					// @ts-ignore
					src={flyerContent?.picture}
					alt='flyer'
					width={600}
					height={400}
					className='w-full rounded-xl mt-6'
				/>
			</div>
			<span className='block mt-6 mb-3'>Live at</span>
			<h2 className='text-4xl font-bold'>{flyerContent?.venueName}</h2>
			<h3 className='text-lg mt-1 font-light'>{flyerContent?.venueMark}</h3>
			<p className='text-lg font-light mt-6 text-center max-w-md leading-relaxed text-primary/60'>
				{flyerContent?.address}
			</p>
		</div>
	)
}

export default FlyerOne
