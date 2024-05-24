// sirve para mentener la informacion del modal. si esta abierto, cerrado, etc

import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const temporalEvent = {
    title: 'Repasar programación',
    notes: 'My event notes',
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Fernando',
    },
  }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            temporalEvent
        ],
        activeEvent: null
    },
    reducers: {
        // addEvent: (state, action) => {
        //     state.events.push(action.payload);
        // },
        // updateEvent: (state, action) => {
        //     state.events = state.events.map(
        //         e => (e.id === action.payload.id) ? action.payload : e
        //     );
        // },
        // deleteEvent: (state, action) => {
        //     state.events = state.events.filter(
        //         e => e.id !== action.payload
        //     );
        // },
        // setActiveEvent: (state, action) => {
        //     state.activeEvent = action.payload;
        // },
        // clearActiveEvent: (state) => {
        //     state.activeEvent = null;
        // }
    }
});

export const {
    addEvent,
    updateEvent,
    deleteEvent,
    setActiveEvent,
    clearActiveEvent
} = calendarSlice.actions;