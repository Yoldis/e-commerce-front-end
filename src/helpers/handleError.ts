import { AxiosError } from "axios";



export const handleError = (error:unknown):string => {

    let myError = 'Error Desconocido';
    if(error instanceof AxiosError ) myError = error.response?.data.error;

    return myError;
}