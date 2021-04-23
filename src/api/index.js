import axios from 'axios';

const localServer = true;
const WEB_SERVER = '';
const LOCAL_SERVER = 'http://localhost:8000/api/v1/';
const baseUrl = localServer ? LOCAL_SERVER : WEB_SERVER;

//get all works
export async function getWorks() {
    return axios.get(`${baseUrl}works/getAllWorks`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

//send message
export async function sendMessage(data) {
    return axios.post(`${baseUrl}contact/saveContact`,data)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}