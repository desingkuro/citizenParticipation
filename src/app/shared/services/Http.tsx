import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API || "",
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

api.interceptors.response.use(
    res => res,
    (error: AxiosError) => {
        const status = error.response?.status;
        if (status === 401) {
            console.log("401 — token inválido/expirado");
            localStorage.removeItem('token');
            localStorage.removeItem('auth');
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
);

export async function getData(url: string) {
    try {
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function postData(url: string, payload: any) {
    try {
        const { data } = await api.post(url, payload);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export default api;
