/** @format */

import { useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { HardDriveDownload, Zap } from 'lucide-react'
import html2canvas from 'html2canvas'

const DownloadButton = () => {
	const { flyerContent } = useContext(FlyerContext) || {}

	function downloadImage() {
		const canvas = document.querySelector('.flyer-element') as HTMLDivElement

		html2canvas(canvas, { backgroundColor: 'null' }).then((canvas) => {
			const link = document.createElement('a')
			link.download = `${flyerContent?.artist}--${flyerContent?.eventDate}.png`
			link.href = canvas.toDataURL('image/png')
			link.click()
			toast.success('Your image has started downloading! 🎉')
		})
	}

	return (
		<div className='p-6 bg-background border-t border-border'>
			<Button
				className='w-full flex items-center justify-center'
				variant={'default'}
				onClick={downloadImage}
			>
				Download Image
				<HardDriveDownload className='ml-3 h-4 w-4' />
			</Button>
		</div>
	)
}

export default DownloadButton
