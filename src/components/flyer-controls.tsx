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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { Colorful } from '@uiw/react-color'

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
        <Input
          id='picture'
          type='file'
          className='block cursor-pointer bg-tertiary file:text-primary/40'
          onChange={(e) => handleChange(e, '')}
        />
      </div>
      <div>
        <Label
          htmlFor='theme-color'
          className='relative mb-4 flex items-center justify-between'
        >
          <span className='flex items-center justify-start'>
            <Palette className='mr-2 h-4 w-4' />
            Theme Presets:
          </span>
          <span className='absolute right-0 top-1 flex items-center justify-end gap-2 font-libertadRegular text-muted-foreground'>
            <span className='relative flex items-start pl-3'>
              <span
                className='absolute left-0 top-[2px] mr-1 inline-block h-2 w-2 rounded-full'
                style={{ backgroundColor: themeSettings?.primary }}
              ></span>
              {themeSettings?.primary}
            </span>
            <span>/</span>
            <span className='relative flex items-start pl-3'>
              <span
                className='absolute left-0 top-[2px] mr-1 inline-block h-2 w-2 rounded-full'
                style={{ backgroundColor: themeSettings?.secondary }}
              ></span>
              {themeSettings?.secondary}
            </span>
          </span>
        </Label>
        <div className='grid grid-cols-4 gap-4'>
          {themeSettings?.presets.map((preset, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='outline'
                    className='relative overflow-hidden rounded-lg transition-opacity duration-200 hover:opacity-85 focus-visible:outline-2'
                    style={{ outlineColor: preset.primary }}
                    onClick={() => {
                      if (setThemeSettings) {
                        setThemeSettings((themeSettings) => ({
                          ...themeSettings,
                          primary: preset.primary,
                          secondary: preset.secondary,
                        }))
                      }
                    }}
                  >
                    <div
                      className='absolute z-10 h-full w-full'
                      style={{
                        backgroundColor: preset.secondary,
                      }}
                    ></div>
                    <div
                      className='!absolute left-1 top-1 z-20 !h-5 !w-5 rounded-sm'
                      style={{
                        backgroundColor: preset.primary,
                      }}
                    ></div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{preset.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <Collapsible>
        <Label
          htmlFor='theme-color'
          className='mb-4 flex items-center justify-between'
        >
          <span className='flex items-center justify-start'>
            <Palette className='mr-2 h-4 w-4' />
            Customize Theme:
          </span>
          <CollapsibleTrigger asChild>
            <Button size={'icon'} variant={'ghost'} className='h-8 w-8'>
              <ChevronsUpDown size={20} />
            </Button>
          </CollapsibleTrigger>
        </Label>
        <CollapsibleContent className='grid gap-6'>
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
            <Colorful
              style={{
                width: 335,
                height: 156,
                borderRadius: 4,
                marginBottom: 24,
              }}
              color={themeSettings?.primary}
              onChange={(color) => {
                if (setThemeSettings) {
                  setThemeSettings((themeSettings) => ({
                    ...themeSettings,
                    primary: color.hex,
                  }))
                }
                console.log(color)
              }}
              disableAlpha={true}
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
            <Colorful
              style={{
                width: 335,
                height: 156,
                borderRadius: 4,
                marginBottom: 24,
              }}
              color={themeSettings?.secondary}
              onChange={(color) => {
                if (setThemeSettings) {
                  setThemeSettings((themeSettings) => ({
                    ...themeSettings,
                    secondary: color.hex,
                  }))
                }
              }}
              disableAlpha={true}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
