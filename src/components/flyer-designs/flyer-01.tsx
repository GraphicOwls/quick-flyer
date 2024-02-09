/** @format */

import Image from 'next/image'

type FlyerOneProps = {
	artist: string
	guestArtists: string
	venueName: string
	venueMark: string
	address: string
	date: Date
	time: string
	picture: string
}

const FlyerOne = (props: FlyerOneProps) => {
	return (
		<div className='flex flex-col items-center justify-start p-8'>
			<div className='flex items-center justify-center gap-6 mb-6'>
				<span>{props.date.toDateString()}</span>
				<span className='mx-1'>/</span>
				<span>{props.time}</span>
			</div>
			<h1 className='text-5xl font-bold text-center'>{props.artist}</h1>
			<p className='text-xl font-light mt-4 text-center max-w-md leading-relaxed'>
				{props.guestArtists}
			</p>
			<div>
				<Image
					src={props.picture}
					alt='flyer'
					width={600}
					height={400}
					className='w-full rounded-xl mt-6'
				/>
			</div>
			<span className='block mt-6 mb-3'>Live at</span>
			<h2 className='text-4xl font-bold'>{props.venueName}</h2>
			<h3 className='text-lg mt-1 font-light'>{props.venueMark}</h3>
			<p className='text-lg font-light mt-6 text-center max-w-md leading-relaxed text-primary/60'>
				{props.address}
			</p>
		</div>
	)
}

export default FlyerOne
