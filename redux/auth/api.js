import axios from 'axios';

export const loginApi = async (credentials) => {
    const response = await axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/login',
        data: credentials,
        withCredentials: true
    });

    return { token: response.data.access_token }
}

