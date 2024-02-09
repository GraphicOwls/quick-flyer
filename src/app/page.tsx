/** @format */

import { FlyerControls } from '@/components/flyer-controls'
import FlyerOne from '@/components/flyer-designs/flyer-01'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Download, HardDriveDownload, Zap } from 'lucide-react'

export default function Home() {
	return (
		<main className='h-svh'>
			<div className='flex items-stretch justify-stretch h-full'>
				{/* CONTAINER */}
				<div className='flex flex-col items-center justify-center flex-grow relative p-6 canvas-container'>
					{/* CANVAS */}
					<div className='w-full max-w-[620px] aspect-3/4 bg-tertiary border border-border rounded-xl overflow-hidden relative z-20 p-6'>
						<FlyerOne
							artist='Paul Damon Band'
							guestArtists='with Marc Moreno, Carlos Puga, David Young and Michael Delwarte'
							venueName='House of Blues'
							venueMark='At Disney Springs'
							address='1490 E Buena Vista Dr, Orlando, FL 32830'
							date={new Date()}
							time='6pm to 10pm'
							picture='/paul-guitar.png'
						/>
					</div>
					<Button
						className='w-full mt-3 max-w-[620px] flex items-center justify-center'
						variant={'outline'}
					>
						Download Image
						<HardDriveDownload className='ml-3 h-4 w-4' />
					</Button>
					<ModeToggle className='absolute top-6 right-6' />
				</div>
				{/* SIDEBAR */}
				<div className='p-6 w-full max-w-96 border-l border-border relative'>
					<div className='flex items-center gap-3'>
						<Zap size={24} />
						<h3 className='text-lg font-bold'>Quick Flyer</h3>
					</div>
					<FlyerControls />
				</div>
			</div>
		</main>
	)
}
