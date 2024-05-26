// objetivo: realizar las interacciones con el auth del store

import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { onChecking, onLogin, onLogout, clearErrorMessage, onRegister } from "../store";

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth)
    const dispatch = useDispatch();


    const startLogin = async({ email, password }) => {

        dispatch(onChecking());

        try {
            const { data } = await calendarApi.post('/auth',{ email, password });
            console.log(data);

            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                name: data.name,
                uid: data.uid,
            }));
            
        } catch (error) {
            dispatch(onLogout('credenciales incorrectas'))
            setTimeout(() => dispatch(
                clearErrorMessage()
            ), 10);
        }
    };

    const startRegister = async({ name, email, password}) => {
        dispatch(onChecking());

        try {
            const { data } = await calendarApi.post('/auth/new',{ name, email, password });
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({
                name: data.name,
                uid: data.uid,
            }));
            
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg))
            setTimeout(() => dispatch(
                clearErrorMessage()
            ), 10);
        }
    }


    return {
        //* Propiedades
        status,
        user,
        errorMessage,

        //* Metodos
        startLogin,
        startRegister,
    }
}