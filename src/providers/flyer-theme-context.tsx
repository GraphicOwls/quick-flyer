'use client'

import { createContext, useState } from 'react'

export const flyerTheme = {
  primary: '',
  secondary: '',
  presets: [
    {
      name: 'Chalk Runes',
      primary: '#232628',
      secondary: '#C5CBBE',
    },
    {
      name: 'Outpost Beige',
      primary: '#BDB08F',
      secondary: '#3B3C31',
    },
    {
      name: 'Cherry Blossom',
      primary: '#EFB4D0',
      secondary: '#2C3641',
    },
    {
      name: 'Autumn Harvest',
      primary: '#E7A04D',
      secondary: '#352D26',
    },
    {
      name: 'Midnight Peach',
      primary: '#E68668',
      secondary: '#222C39',
    },
    {
      name: 'Emerald Tide',
      primary: '#A7E491',
      secondary: '#273E53',
    },
    {
      name: 'Canyon Clay',
      primary: '#924625',
      secondary: '#BDBB98',
    },
    {
      name: 'Twilight Obsidian',
      primary: '#9295D3',
      secondary: '#1C1C1F',
    },
    {
      name: 'Misty Harbor',
      primary: '#80CCCC',
      secondary: '#2B2F2F',
    },
    {
      name: 'Velvet Noir',
      primary: '#11161B',
      secondary: '#C2A55C',
    },
    {
      name: 'Gilded Dusk',
      primary: '#E4B353',
      secondary: '#413C44',
    },
    {
      name: 'Mossy Stone',
      primary: '#38513F',
      secondary: '#BBBC8D',
    },
  ],
}

type FlyerThemeSettings = {
  primary: string
  secondary: string
  presets: { name: string; primary: string; secondary: string }[]
}

type FlyerThemeContextType = {
  themeSettings: FlyerThemeSettings
  setThemeSettings: React.Dispatch<React.SetStateAction<FlyerThemeSettings>>
}

export const FlyerThemeContext = createContext<FlyerThemeContextType | null>(
  null
)

export function FlyerThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [themeSettings, setThemeSettings] = useState<FlyerThemeSettings>({
    primary: flyerTheme.presets[0].primary,
    secondary: flyerTheme.presets[0].secondary,
    presets: flyerTheme.presets,
  })

  return (
    <FlyerThemeContext.Provider value={{ themeSettings, setThemeSettings }}>
      {children}
    </FlyerThemeContext.Provider>
  )
}
