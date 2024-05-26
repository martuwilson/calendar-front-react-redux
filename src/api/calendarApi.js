import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();


const calendarApi = axios.create({
    baseURL: VITE_API_URL,
});

//todo config interceptores de axios

calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token') //esto es para que el token se envie en cada peticion de axios para que el backend pueda validar el token
    }
    return config
})
export default calendarApi;