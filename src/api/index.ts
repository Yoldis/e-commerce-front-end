


import axios from 'axios';
import { getEnvs } from '../helpers';


const{VITE_API_URL} = getEnvs();

const eCommerceApi = axios.create({
    baseURL:VITE_API_URL,
});

eCommerceApi.interceptors.request.use((config) => {
    config.headers.set('x-token', localStorage.getItem('x-token'))
    return config
})

export default eCommerceApi;



