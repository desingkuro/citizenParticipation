import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
}

export function getData(url: string) {
    axios.get(url, { headers: headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
}

export function postData(url: string, data: any) {
    axios.post(url, data, { headers: headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        })
}