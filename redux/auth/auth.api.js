import axios from 'axios';

export const loginApi = async (credentials) => {
    const response = await axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/login',
        data: credentials,
        withCredentials: true
    });

    return response;
}

export const registerApi = async (payload) => {
    const response = await axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/register',
        data: payload,
    });

    return response
}

