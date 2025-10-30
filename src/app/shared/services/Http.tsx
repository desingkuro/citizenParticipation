import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
}

export async function getData(url: string) {
    const response = await axios.get(url, { headers: headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
    return response;
}

export async function postData(url: string, data: any) {
    const response = await axios.post(url, data, { headers: headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
    return response;
}