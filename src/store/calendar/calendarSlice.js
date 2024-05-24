// sirve para mentener la informacion del modal. si esta abierto, cerrado, etc

import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";


const temporalEvent = {
    _id: new Date().getTime(),
    title: 'Repasar programación',
    notes: 'Redux es rarp',
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Martu',
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
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
    }
});

export const {
    onSetActiveEvent
} = calendarSlice.actions;