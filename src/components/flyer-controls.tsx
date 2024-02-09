/** @format */

'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

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

export const FlyerControls = () => {
	const [date, setDate] = useState<Date>()

	return (
		<div className='grid grid-cols-1 gap-6 pt-9'>
			<div>
				<Label htmlFor='artist' className='block mb-2'>
					Artist:
				</Label>
				<Input
					id='artist'
					type='text'
					placeholder='Paul Dmon Band'
					value='Paul Damon Band'
				/>
			</div>
			<div>
				<Label htmlFor='guest-artists' className='block mb-2'>
					Guest Artists:
				</Label>
				<Input
					id='guest-artists'
					type='text'
					placeholder='with Gerry Wiggins, Red Calendar, etc.'
				/>
			</div>
			<div>
				<Label htmlFor='venue-name' className='block mb-2'>
					Venue Name:
				</Label>
				<Input id='venue-name' type='text' placeholder='The House of Blues' />
			</div>
			<div>
				<Label htmlFor='venue-mark' className='block mb-2'>
					Venue Mark:
				</Label>
				<Input id='venue-mark' type='text' placeholder='At Disney Springs' />
			</div>
			<div>
				<Label htmlFor='address' className='block mb-2'>
					Venue Address:
				</Label>
				<Input
					id='address'
					type='text'
					placeholder='1490 E Buena Vista Dr, Orlando, FL 32830'
				/>
			</div>
			<div>
				<Label htmlFor='picture' className='block mb-2'>
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
				<Label htmlFor='time' className='block mb-2'>
					Event Time:
				</Label>
				<Input id='time' type='text' placeholder='6pm to 10pm' />
			</div>
			<div className='block'>
				<Label htmlFor='picture' className='block mb-2'>
					Flyer Image:
				</Label>
				<Input
					id='picture'
					type='file'
					className='cursor-pointer file:text-primary/40 block bg-tertiary'
				/>
			</div>
		</div>
	)
}
