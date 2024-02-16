'use client'
/** @format */
import { useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { FlyerThemeContext } from '@/providers/flyer-theme-context'
import '@/styles/Quick_Flyer.css'
import Image from 'next/image'
import { AudioWaveform } from 'lucide-react'

const FlyerOne = () => {
  const { flyerContent } = useContext(FlyerContext) || {}
  const { themeSettings } = useContext(FlyerThemeContext) || {}

  return (
    <div
      className='relative h-full'
      style={{ backgroundColor: themeSettings?.secondary }}
    >
      <div className='flex items-start justify-between pb-6 pl-10 pt-10'>
        <div className='flex flex-col items-start justify-start'>
          <span
            className='-mb-2 block font-veneer text-6xl leading-none'
            style={{ color: themeSettings?.primary }}
          >
            Live Music
          </span>
          <span
            className='items-top flex justify-start font-libertadRegular text-[1.4rem]'
            style={{ color: themeSettings?.primary }}
          >
            <AudioWaveform className='mr-2 mt-[2px] inline-block' size={24} />
            From {flyerContent?.time}
          </span>
        </div>
        <span
          className='block rounded-l-md pb-3 pl-6 pr-10 pt-6 font-veneer text-4xl leading-none'
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
          src='/paul-guitar.png'
          alt='Flyer Image'
          className='h-[300px] w-full rounded-md object-cover'
          height={300}
          width={600}
        />
      </div>
      <div className='-mt-7 flex items-center justify-center'>
        <div
          className='rounded-md'
          style={{ backgroundColor: themeSettings?.secondary }}
        >
          <h1
            className='relative z-30 rounded-md border px-6 pt-4 text-center font-veneer text-5xl font-normal'
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
          className='mb-4 block uppercase'
          style={{ color: themeSettings?.primary }}
        >
          Join us at
        </span>
        <h2
          className='font-veneer text-6xl font-normal'
          style={{ color: themeSettings?.primary }}
        >
          {flyerContent?.venueName}
        </h2>
        {/* <h3 className='mt-1 text-lg font-light'>{flyerContent?.venueMark}</h3> */}
        <p
          className='-mt-2 w-full px-6 py-4 text-center font-libertadRegular text-lg font-light leading-relaxed'
          style={{ color: themeSettings?.primary }}
        >
          {flyerContent?.address}
        </p>
      </div>
    </div>
  )
}

export default FlyerOne
