// sirve para mentener la informacion del modal. si esta abierto, cerrado, etc

import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false;
        }
    }
});

export const {
    onOpenDateModal,
    onCloseDateModal
} = uiSlice.actions;