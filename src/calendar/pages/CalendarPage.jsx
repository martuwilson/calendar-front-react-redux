/* eslint-disable no-unused-vars */
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { AddNewEvent, CalendarModal, Navbar } from "../"
import { localizer, getMessagesES } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { useState } from 'react'
import { useUiStore, useCalendarStore } from '../../hooks'


export const CalendarPage = () => {

  const {openDateModal} = useUiStore()
  const {events, setActiveEvent} = useCalendarStore()


  //localStorage.getItem('lastView') set to current view or 'week' by default
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week') 

  const eventStyleGetter = (event, start, end, isSelected) => {


    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    }

    return {
      style,
    }
  }


  const onDoubleClick = (e) => {
    openDateModal()
  }

  const onSelectEvent = (e) => {
    setActiveEvent(e)
  }

  const onViewChanged = (e) => {
    setLastView(e)
    localStorage.setItem('lastView', e) // set last view in local storage for later use
  }
  return (
    <>
      <Navbar/>
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={
        {
          event: CalendarEvent,
        }
      }
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelectEvent}
      onView={onViewChanged}
    />

    <CalendarModal/>
    <AddNewEvent/>
    </>
  )
}
