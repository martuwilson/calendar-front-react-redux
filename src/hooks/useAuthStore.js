// objetivo: realizar las interacciones con el auth del store

import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch();


    const startLogin = async({ email, password }) => {
        try {
            const { data } = await calendarApi.post('/auth',{ email, password });
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }


    return {
        //* Propiedades
        status,
        user,
        errorMessage,

        //* Metodos
        startLogin,
    }
}