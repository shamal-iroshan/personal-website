import axios from 'axios';

import {getCookie, setCookie} from "../utils/cookies";

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
            // sendEmail(data);
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

//send email
// eslint-disable-next-line no-unused-vars
async function sendEmail(data) {
  return axios.post(`https://shamaliroshan.com/mail_server/sendMail.php`,{
    to : "hello@shamaliroshan.com",
    name: data.name,
    from: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message
  })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

//set visit count
export async function updateVisitCount() {
    let cookieValue = getCookie('viewed');
    if (cookieValue) {
        return axios.put(`${baseUrl}views/updateViewCount`,{"website": "shamaliroshan.com"})
            .catch(function (error) {
                console.log(error);
            });
    } else {
        setCookie('viewed', true, 1);
    }
    return cookieValue;
}