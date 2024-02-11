/** @format */
'use client'

import { FlyerControls } from '@/components/flyer-controls'
import FlyerOne from '@/components/flyer-designs/flyer-01'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { HardDriveDownload, Zap } from 'lucide-react'
import html2canvas from 'html2canvas'
import { backgroundClip } from 'html2canvas/dist/types/css/property-descriptors/background-clip'

export default function Home() {
	function downloadImage() {
		const canvas = document.querySelector('.flyer-element')
		// @ts-ignore
		html2canvas(canvas, { backgroundColor: 'null' }).then((canvas) => {
			const link = document.createElement('a')
			link.download = 'flyer.png'
			link.href = canvas.toDataURL('image/png')
			link.click()
		})
	}

	return (
		<main className='h-svh'>
			<div className='flex items-stretch justify-stretch h-full'>
				{/* CONTAINER */}
				<div className='flex flex-col items-center justify-center flex-grow relative p-6 canvas-container'>
					{/* CANVAS */}
					<div className='flyer-element w-full max-w-[620px] aspect-3/4 bg-tertiary border border-border rounded-3xl overflow-hidden relative z-20 p-6'>
						<FlyerOne />
					</div>
					<Button
						className='w-full mt-3 max-w-[620px] flex items-center justify-center'
						variant={'outline'}
						onClick={downloadImage}
					>
						Download Image
						<HardDriveDownload className='ml-3 h-4 w-4' />
					</Button>
					<ModeToggle className='absolute top-6 right-6' />
				</div>
				{/* SIDEBAR */}
				<div className='p-8 w-full max-w-96 border-l border-border relative'>
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
