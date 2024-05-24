import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
  addHours,format, parse, startOfWeek,getDay
} from 'date-fns'
import enUS from 'date-fns/locale/en-US'

import { Navbar } from "../"

const locales = {
  'en-US': enUS,

}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const event = [{
  title: 'My event',
  notes: 'My event notes',
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernando',
  },
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar/>
      <Calendar
      localizer={localizer}
      events={event}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
    />
    </>
  )
}
