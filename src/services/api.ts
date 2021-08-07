import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'https://singu.singu-fake-backend.store/'
});

export { api, AxiosResponse };