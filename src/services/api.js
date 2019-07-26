import axios from 'axios';

const api = axios.create({
    baseURL: 'https://django-app-1-247014.appspot.com/',
});

export default api;