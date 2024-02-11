/** @format */
'use client'

import { FlyerControls } from '@/components/flyer-controls'
import FlyerOne from '@/components/flyer-designs/flyer-01'
import { ModeToggle } from '@/components/mode-toggle'
import { Zap } from 'lucide-react'
import DownloadButton from '@/components/download-button'

export default function Home() {
	return (
		<main className='h-svh'>
			<div className='flex items-stretch justify-stretch h-full'>
				{/* CONTAINER */}
				<div className='flex flex-col items-center justify-center flex-grow relative p-6 canvas-container'>
					{/* CANVAS */}
					<div className='flyer-element w-full max-w-[620px] aspect-3/4 bg-tertiary border border-border rounded-3xl overflow-hidden relative z-20 p-6'>
						<FlyerOne />
					</div>
					<ModeToggle className='absolute top-6 right-6' />
				</div>
				{/* SIDEBAR */}
				<div className='w-full max-w-96 border-l border-border relative flex flex-col justify-between'>
					<div className='flex items-center gap-3 p-6 border-b border-border'>
						<Zap size={24} />
						<h3 className='text-lg font-bold'>Quick Flyer</h3>
					</div>
					<FlyerControls />
					<DownloadButton />
				</div>
			</div>
		</main>
	)
}
