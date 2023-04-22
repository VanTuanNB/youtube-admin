import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:5000/api/admin',
    headers: { Accept: 'application/json, text/plain, /","Content-Type": "multipart/form-data' },
});

export default httpRequest;
