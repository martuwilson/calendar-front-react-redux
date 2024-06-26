import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { getEnvVariables } from '../helpers';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';


export const AppRouter = () => {

   //const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    const { checkAuthToken, status} = useAuthStore();

    //useEffect para aceptar el token y verificar si el usuario esta autenticado
    useEffect(() => {
        checkAuthToken();
    }, []);

    if(status === 'checking') {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage />} />
                            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                        </>
                )
                    : (
                        <>
                            <Route path="/" element={ <CalendarPage /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
            }

            
        </Routes>
    )
}
