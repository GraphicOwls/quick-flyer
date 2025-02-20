/** @format */
'use client'

import { createContext, useState } from 'react'
import { format } from 'date-fns'

interface FlyerContent {
  artist: string
  guestArtists: string
  venueName: string
  venueSubtitle: string
  address: string
  eventDate: string
  time: string
  picture: string
  fileName: string
  image: string
}

const defaultFlyerContent: FlyerContent = {
  artist: 'Artist Name',
  guestArtists: 'with Special Guests',
  venueName: 'The House of Blues',
  venueSubtitle: 'At Disney Springs',
  address: '1490 E Buena Vista Dr, Orlando, FL 32830',
  eventDate: format(new Date(), 'ccc LLL do'),
  time: '6pm to 10pm',
  picture: '',
  fileName: '',
  image: '/paul-guitar.png',
}

export const textContent = {
  artist: 'Artist Name',
  guestArtists: 'with Special Guests',
  venueName: 'The House of Blues',
  venueSubtitle: 'at Disney Springs',
  address: '1490 E Buena Vista Dr, Orlando, FL 32830',
  eventDate: format(new Date(), 'ccc LLL do'),
  time: '6 to 10pm',
  picture: '/paul-guitar.png',
  fileName: `quick-flyer`,
}

type FlyerContextType = {
  flyerContent: {
    artist: string
    guestArtists: string
    venueName: string
    venueSubtitle: string
    address: string
    eventDate: string
    time: string
    picture: string
    fileName: string
    image: string
  }

  setFlyerContent: React.Dispatch<
    React.SetStateAction<{
      artist: string
      guestArtists: string
      venueName: string
      venueSubtitle: string
      address: string
      eventDate: string
      time: string
      picture: string
      fileName: string
      image: string
    }>
  >
}

export const FlyerContext = createContext<FlyerContextType | null>(null)

export function FlyerProvider({ children }: any) {
  const [flyerContent, setFlyerContent] =
    useState<FlyerContextType['flyerContent']>(defaultFlyerContent)

  return (
    <FlyerContext.Provider value={{ flyerContent, setFlyerContent }}>
      {children}
    </FlyerContext.Provider>
  )
}
