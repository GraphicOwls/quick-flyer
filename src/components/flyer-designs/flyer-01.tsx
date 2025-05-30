'use client'
/** @format */
import React from 'react'
import { useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { FlyerThemeContext } from '@/providers/flyer-theme-context'
import Image from 'next/image'
import { AudioWaveform } from 'lucide-react'

interface FlyerOneProps extends React.HTMLAttributes<HTMLDivElement> {}

const FlyerOne = React.forwardRef<HTMLDivElement, FlyerOneProps>(
  (props, ref) => {
    const { flyerContent } = useContext(FlyerContext) || {}
    const { themeSettings } = useContext(FlyerThemeContext) || {}

    return (
      <div
        {...props}
        ref={ref}
        className='relative h-full uppercase'
        style={{ backgroundColor: themeSettings?.secondary }}
      >
        <div className='flex items-start justify-between pb-6 pl-10 pt-10'>
          <div className='flex flex-col items-start justify-start'>
            <span
              className='block font-veneer text-6xl leading-none'
              style={{ color: themeSettings?.primary }}
            >
              Live Music
            </span>
            <span
              className='items-top font-libertadMono flex justify-start text-[1.5rem]'
              style={{ color: themeSettings?.primary }}
            >
              <AudioWaveform className='mr-2 mt-[2px] inline-block' size={24} />
              From {flyerContent?.time}
            </span>
          </div>
          <span
            className='block rounded-l-md pb-4 pl-6 pr-10 pt-5 font-veneer text-4xl leading-none'
            style={{
              backgroundColor: themeSettings?.primary,
              color: themeSettings?.secondary,
            }}
          >
            {flyerContent?.eventDate}
          </span>
        </div>
        <div className='px-10'>
          <div
            className='h-px border border-dashed opacity-40'
            style={{ borderColor: themeSettings?.primary }}
          ></div>
        </div>
        <div className='mt-8 px-10'>
          <Image
            src={flyerContent?.image ?? '/paul-guitar.png'}
            alt='Flyer Image'
            className='h-[300px] w-full rounded-md object-cover'
            height={300}
            width={600}
            priority
            unoptimized
            loader={({ src }) => src}
          />
        </div>
        <div className='-mt-7 flex items-center justify-center'>
          <div
            className='rounded-md'
            style={{ backgroundColor: themeSettings?.secondary }}
          >
            <h1
              className='relative z-30 rounded-md border px-6 pb-1 pt-3 text-center font-veneer text-5xl font-normal'
              style={{
                borderColor: themeSettings?.primary + '2A',
                backgroundColor: themeSettings?.primary + '1A',
                color: themeSettings?.primary,
              }}
            >
              {flyerContent?.artist}
            </h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center px-10 pt-4'>
          <p
            className='relative z-30 max-w-sm text-center font-libertadMedium text-lg leading-relaxed'
            style={{ color: themeSettings?.primary }}
          >
            {flyerContent?.guestArtists}
          </p>
        </div>
        <div className='mb-6 mt-6 px-10'>
          <div
            className='h-px border border-dashed opacity-40'
            style={{ borderColor: themeSettings?.primary }}
          ></div>
        </div>
        <div className='relative z-30 flex w-full flex-col items-center justify-center'>
          <span
            className='mb-2 block font-libertadRegular uppercase'
            style={{ color: themeSettings?.primary }}
          >
            Join us at
          </span>
          <h2
            className='font-veneer text-5xl font-normal'
            style={{ color: themeSettings?.primary }}
          >
            {flyerContent?.venueName}
          </h2>
          <h3
            className='mt-1 font-veneer text-2xl font-light'
            style={{ color: themeSettings?.primary }}
          >
            {flyerContent?.venueSubtitle}
          </h3>
          <p
            className='mt-2 w-full px-6 py-4 text-center font-libertadRegular text-lg font-light leading-relaxed'
            style={{ color: themeSettings?.primary }}
          >
            {flyerContent?.address}
          </p>
        </div>
      </div>
    )
  }
)

FlyerOne.displayName = 'FlyerOne'

export default FlyerOne
