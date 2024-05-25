import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // authenticated | not-authenticated | checking
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => { // this reducer is for when the app is checking the user's authentication status
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => { // this reducer is for when the user is authenticated
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        }
    }
});

export const { onChecking, onLogin } = authSlice.actions;