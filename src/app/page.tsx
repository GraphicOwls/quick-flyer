/** @format */
'use client'

import { useRef, useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { FlyerControls } from '@/components/flyer-controls'
import FlyerOne from '@/components/flyer-designs/flyer-01'
import { ModeToggle } from '@/components/mode-toggle'
import { Zap } from 'lucide-react'
import DownloadButton from '@/components/download-button'
import { HardDriveDownload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Home() {
  const { flyerContent, setFlyerContent } = useContext(FlyerContext) || {}
  const flyerRef = useRef<HTMLDivElement>(null)

  return (
    <main className='h-svh'>
      <div className='flex h-full items-stretch justify-stretch'>
        {/* CONTAINER */}
        <div className='canvas-container relative flex flex-grow flex-col items-center justify-center p-6'>
          {/* CANVAS */}
          <div
            ref={flyerRef}
            className='flyer-element relative z-20 min-h-[840px] w-full max-w-[600px] overflow-hidden rounded-2xl border border-border bg-tertiary'
          >
            <FlyerOne ref={flyerRef} />
          </div>
          <ModeToggle className='absolute right-6 top-6' />
        </div>
        {/* SIDEBAR */}
        <div className='relative flex w-full max-w-96 flex-col justify-between border-l border-border'>
          <div className='flex items-center gap-3 border-b border-border p-6'>
            <Zap size={24} />
            <h3 className='text-lg font-bold'>Quick Flyer</h3>
          </div>
          <FlyerControls />
          <div className='border-t border-border bg-background p-6'>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className='flex w-full items-center justify-center'
                  variant={'default'}
                >
                  Download Flyer
                  <HardDriveDownload className='ml-3 h-4 w-4' />
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Download Flyer</DialogTitle>
                  <DialogDescription>
                    What would you like to name your file?
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='flex-col gap-4'>
                    <Label htmlFor='file-name' className='mb-2 block'>
                      File Name
                    </Label>
                    <Input
                      id='file-name'
                      name='file-name'
                      type='text'
                      placeholder='your-file-name.png'
                      defaultValue={flyerContent?.fileName}
                      className='col-span-3'
                      onChange={(e) => {
                        if (setFlyerContent) {
                          setFlyerContent((prev) => ({
                            ...prev,
                            fileName:
                              e.target.value || 'artist_name--event_date',
                          }))
                        }
                      }}
                    />
                  </div>
                </div>
                <DialogFooter className='w-full'>
                  <DownloadButton elementRef={flyerRef} />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </main>
  )
}
