import axios from 'axios';

const localServer = false;
const WEB_SERVER = 'https://shamaliroshan.com/api/';
const LOCAL_SERVER = 'http://localhost:8080/api/v1/';
const baseUrl = localServer ? LOCAL_SERVER : WEB_SERVER;

//get all works
export async function getWorks() {
    return axios.get(`${baseUrl}work/getAllWorks`)
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
    return axios.post(`${baseUrl}message/saveMessage`,data)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}