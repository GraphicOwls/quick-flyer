/** @format */

'use client'
import { useEffect, useState, useRef, useContext } from 'react'
import { FlyerContext } from '@/providers/flyer-context'
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
import { CirclePicker } from 'react-color'

export const FlyerControls = () => {
	const { flyerContent, setFlyerContent = () => {} } =
		useContext(FlyerContext) || {}

	const [date, setDate] = useState<Date>()

	useEffect(() => {
		if (!date) return
		setFlyerContent((flyerContent) => ({
			...flyerContent,
			eventDate: date ? format(date, 'PP') : '',
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
		defaultValue: string,
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
		<div className='flex flex-col flex-1 gap-6 p-6 h-full overflow-scroll'>
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
					placeholder='Paul Dmon Band'
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
					placeholder='with Gerry Wiggins, Red Calendar, etc.'
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
					htmlFor='venue-mark'
					className='mb-2 flex items-center justify-start'
				>
					<Building2 className='mr-2 h-4 w-4' />
					Venue Mark:
				</Label>
				<Input
					id='venue-mark'
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
								!date && 'text-muted-foreground',
							)}
						>
							<CalendarIcon className='mr-2 h-4 w-4' />
							{date ? format(date, 'PP') : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0'>
						<Calendar
							mode='single'
							selected={date}
							onSelect={setDate}
							initialFocus
						/>
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
					className='cursor-pointer file:text-primary/40 block bg-tertiary'
					onChange={(e) => handleChange(e, '')}
				/>
			</div>
			<div className='block'>
				<Label
					htmlFor='theme-color'
					className='mb-4 flex items-center justify-start'
				>
					<Palette className='mr-2 h-4 w-4' />
					Theme Color:
				</Label>
				<CirclePicker />
			</div>
		</div>
	)
}
