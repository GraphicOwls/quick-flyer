/** @format */

'use client'
import { useEffect, useState, useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
import { FlyerThemeContext } from '@/providers/flyer-theme-context'
import { format } from 'date-fns'
import {
  Building2,
  Calendar as CalendarIcon,
  Clock,
  ImageIcon,
  MapPin,
  User,
  Users,
  Palette,
  ChevronsUpDown,
  X,
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import ColorPicker from 'react-best-gradient-color-picker'

export const FlyerControls = () => {
  const { flyerContent, setFlyerContent = () => {} } =
    useContext(FlyerContext) || {}
  const { themeSettings, setThemeSettings } =
    useContext(FlyerThemeContext) || {}

  const [date, setDate] = useState<Date>()

  useEffect(() => {
    if (!date) return
    setFlyerContent((flyerContent) => ({
      ...flyerContent,
      eventDate: date ? format(date, 'ccc LLL do') : '',
    }))
  }, [date, setFlyerContent])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        localStorage.setItem('flyerImage', base64String)
        setFlyerContent((flyerContent) => ({
          ...flyerContent,
          image: base64String,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    const savedImage = localStorage.getItem('flyerImage')
    if (savedImage && setFlyerContent) {
      setFlyerContent((flyerContent) => ({
        ...flyerContent,
        image: savedImage,
      }))
    }
  }, [setFlyerContent])

  const toCamelCase = (str: string): string => {
    return str
      .split('-')
      .reduce((result: string, word: string, index: number): string => {
        return (
          result + (index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        )
      }, '')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    defaultValue: string
  ): void => {
    const { id, value } = e.target
    const camelCaseId = toCamelCase(id) as keyof typeof flyerContent

    if (e.target.value === '') {
      setFlyerContent((flyerContent) => ({
        ...flyerContent,
        [camelCaseId]: defaultValue,
      }))
      return
    } else {
      setFlyerContent((flyerContent) => ({
        ...flyerContent,
        [camelCaseId]: value,
      }))
    }
  }

  return (
    <div className='flex h-full flex-1 flex-col gap-6 overflow-scroll p-6'>
      <div>
        <Label
          htmlFor='artist'
          className='mb-2 flex items-center justify-start'
        >
          <User className='mr-2 h-4 w-4' />
          Artist:
        </Label>
        <Input
          id='artist'
          type='text'
          placeholder='Artist Name'
          onChange={(e) => handleChange(e, 'Artist Name')}
        />
      </div>
      <div>
        <Label
          htmlFor='guest-artists'
          className='mb-2 flex items-center justify-start'
        >
          <Users className='mr-2 h-4 w-4' />
          Guest Artists:
        </Label>
        <Input
          id='guest-artists'
          type='text'
          placeholder='with Special Guests'
          onChange={(e) => handleChange(e, 'with Special Guests')}
        />
      </div>
      <div>
        <Label
          htmlFor='venue-name'
          className='mb-2 flex items-center justify-start'
        >
          <Building2 className='mr-2 h-4 w-4' />
          Venue Name:
        </Label>
        <Input
          id='venue-name'
          type='text'
          placeholder='The House of Blues'
          onChange={(e) => handleChange(e, 'The House of Blues')}
        />
      </div>
      <div>
        <Label
          htmlFor='venue-subtitle'
          className='mb-2 flex items-center justify-start'
        >
          <Building2 className='mr-2 h-4 w-4' />
          Venue Subtitle:
        </Label>
        <Input
          id='venue-subtitle'
          type='text'
          placeholder='At Disney Springs'
          onChange={(e) => handleChange(e, 'At Disney Springs')}
        />
      </div>
      <div>
        <Label
          htmlFor='address'
          className='mb-2 flex items-center justify-start'
        >
          <MapPin className='mr-2 h-4 w-4' />
          Venue Address:
        </Label>
        <Input
          id='address'
          type='text'
          placeholder='1490 E Buena Vista Dr, Orlando, FL 32830'
          onChange={(e) =>
            handleChange(e, '1490 E Buena Vista Dr, Orlando, FL 32830')
          }
        />
      </div>
      <div>
        <Label
          htmlFor='evet-date'
          className='mb-2 flex items-center justify-start'
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          Event Date:
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, 'PP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar mode='single' selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor='time' className='mb-2 flex items-center justify-start'>
          <Clock className='mr-2 h-4 w-4' />
          Event Time:
        </Label>
        <Input
          id='time'
          type='text'
          placeholder='6pm to 10pm'
          onChange={(e) => handleChange(e, '6pm to 10pm')}
        />
      </div>
      <div className='block'>
        <Label
          htmlFor='picture'
          className='mb-2 flex items-center justify-start'
        >
          <ImageIcon className='mr-2 h-4 w-4' />
          Flyer Image:
        </Label>
        <div className='relative'>
          <Input
            id='picture'
            type='file'
            accept='image/*'
            className='block cursor-pointer bg-tertiary pr-10 file:text-primary/40'
            onChange={handleImageUpload}
          />
          {flyerContent?.image !== '/paul-guitar.png' && (
            <Button
              type='button'
              variant='ghost'
              size='icon'
              className='absolute right-0 top-1/2 -translate-y-1/2 px-2'
              onClick={() => {
                localStorage.removeItem('flyerImage')
                setFlyerContent((flyerContent) => ({
                  ...flyerContent,
                  image: '/paul-guitar.png',
                }))
              }}
            >
              <X className='h-4 w-4' />
            </Button>
          )}
        </div>
      </div>
      <div>
        <Label
          htmlFor='theme-color'
          className='relative mb-4 flex items-center justify-between'
        >
          <span className='flex items-center justify-start'>
            <Palette className='mr-2 h-4 w-4' />
            Customize Colors:
          </span>
        </Label>
        <div className='mb-6 mt-3 grid'>
          <Select
            onValueChange={(value) => {
              const selectedPreset = themeSettings?.presets.find(
                (p) => p.name === value
              )
              if (setThemeSettings && selectedPreset) {
                setThemeSettings((themeSettings) => ({
                  ...themeSettings,
                  primary: selectedPreset.primary,
                  secondary: selectedPreset.secondary,
                }))
              }
            }}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Choose a preset…' />
            </SelectTrigger>
            <SelectContent className='relative z-[9999]'>
              {themeSettings?.presets.map((preset, index) => (
                <SelectItem key={index} value={preset.name}>
                  {preset.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='grid gap-6'>
          <div className='block'>
            <Label
              htmlFor='primary-color'
              className='mb-4 flex items-center justify-between'
            >
              <span className='flex items-center justify-start'>
                <div
                  className='mr-2 h-4 w-4 rounded-full border border-border'
                  style={{ backgroundColor: themeSettings?.primary }}
                ></div>
                Primary Color:
              </span>
              <span className='font-libertadLight text-muted-foreground'>
                {themeSettings?.primary}
              </span>
            </Label>
            <ColorPicker
              value={themeSettings?.primary}
              onChange={(color) => {
                if (setThemeSettings) {
                  setThemeSettings((themeSettings) => ({
                    ...themeSettings,
                    primary: color,
                  }))
                }
              }}
              hideColorTypeBtns={true}
              hidePresets={true}
              hideGradientControls={true}
              hideColorGuide={true}
              hideAdvancedSliders={true}
              hideOpacity={true}
              width={335}
              height={156}
              className={`!bg-transparent`}
            />
          </div>
          <div className='block'>
            <Label
              htmlFor='secondary-color'
              className='mb-4 flex items-center justify-between'
            >
              <span className='flex items-center justify-start'>
                <div
                  className='mr-2 h-4 w-4 rounded-full border border-border'
                  style={{ backgroundColor: themeSettings?.secondary }}
                ></div>
                Secondary Color:
              </span>
              <span className='font-libertadLight text-muted-foreground'>
                {themeSettings?.secondary}
              </span>
            </Label>
            <ColorPicker
              value={themeSettings?.secondary}
              onChange={(color) => {
                if (setThemeSettings) {
                  setThemeSettings((themeSettings) => ({
                    ...themeSettings,
                    secondary: color,
                  }))
                }
              }}
              hideColorTypeBtns={true}
              hidePresets={true}
              hideGradientControls={true}
              hideColorGuide={true}
              hideAdvancedSliders={true}
              hideOpacity={true}
              width={335}
              height={156}
              className={`!bg-transparent !text-foreground`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
