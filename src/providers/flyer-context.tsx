/** @format */
'use client'

import { createContext, useState } from 'react'

export const textContent = {
	artist: 'Artist Name',
	guestArtists: 'with Special Guests',
	venueName: 'The House of Blues',
	venueMark: 'at Disney Springs',
	address: '1490 E Buena Vista Dr, Orlando, FL 32830',
	eventDate: 'Feb 14, 2022',
	time: '6 to 10pm',
	picture: '/paul-guitar.png',
	fileName: `quick-flyer`,
}

type FlyerContextType = {
	flyerContent: {
		artist: string
		guestArtists: string
		venueName: string
		venueMark: string
		address: string
		eventDate: string
		time: string
		picture: string
		fileName: string
	}

	setFlyerContent: React.Dispatch<
		React.SetStateAction<{
			artist: string
			guestArtists: string
			venueName: string
			venueMark: string
			address: string
			eventDate: string
			time: string
			picture: string
			fileName: string
		}>
	>
}

export const FlyerContext = createContext<FlyerContextType | null>(null)

export function FlyerProvider({ children }: any) {
	const [flyerContent, setFlyerContent] =
		useState<FlyerContextType['flyerContent']>(textContent)

	return (
		<FlyerContext.Provider value={{ flyerContent, setFlyerContent }}>
			{children}
		</FlyerContext.Provider>
	)
}
