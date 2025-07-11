import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://6822bc42-b00f-467e-9af5-8474ac155376-00-2i0w1p34lovo5.pike.replit.dev:5000/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default apiInstance;
