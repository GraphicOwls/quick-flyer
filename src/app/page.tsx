/** @format */
'use client'

import { useRef } from 'react'
import { FlyerControls } from '@/components/flyer-controls'
import FlyerOne from '@/components/flyer-designs/flyer-01'
import { ModeToggle } from '@/components/mode-toggle'
import { Zap } from 'lucide-react'
import DownloadButton from '@/components/download-button'

export default function Home() {
  const flyerRef = useRef<HTMLDivElement>(null)

  return (
    <main className='h-svh'>
      <div className='flex h-full items-stretch justify-stretch'>
        {/* CONTAINER */}
        <div className='canvas-container relative flex flex-grow flex-col items-center justify-center p-6'>
          {/* CANVAS */}
          <div
            ref={flyerRef}
            className='flyer-element relative z-20 h-[840px] w-full max-w-[600px] overflow-hidden rounded-2xl border border-border bg-tertiary'
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
          <DownloadButton elementRef={flyerRef} />
        </div>
      </div>
    </main>
  )
}
