/** @format */

import { useContext, useCallback } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { HardDriveDownload } from 'lucide-react'
import { toPng } from 'html-to-image'

interface DownloadButtonProps {
  elementRef: React.RefObject<HTMLDivElement>
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ elementRef }) => {
  const { flyerContent } = useContext(FlyerContext) || {}

  const downloadImage = useCallback(() => {
    if (elementRef.current === null) return

    toPng(elementRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${flyerContent?.fileName}.png`
        link.href = dataUrl
        link.click()
        toast.success('Your image has started downloading! 🎉')
      })
      .catch((err) => {
        console.log(err)
        toast.error('Something went wrong!')
      })
  }, [elementRef, flyerContent])

  return (
    <div className='w-full'>
      <Button
        className='flex w-full items-center justify-center'
        variant={'default'}
        onClick={downloadImage}
      >
        Download Flyer
        <HardDriveDownload className='ml-3 h-4 w-4' />
      </Button>
    </div>
  )
}

export default DownloadButton
