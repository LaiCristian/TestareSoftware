import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    return response;
}, async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // Refresh the token here (this is just a placeholder, implement your own token refresh logic)
        const newToken = await refreshAuthToken();
        localStorage.setItem('token', newToken);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
});

async function refreshAuthToken() {
    // Implement your token refresh logic here
    // For example, you could make a request to your refresh token endpoint
    const response = await axios.post('http://localhost:8080/refresh-token', {
        refreshToken: localStorage.getItem('refreshToken')
    });
    return response.data.newToken;
}

export default axiosInstance;
