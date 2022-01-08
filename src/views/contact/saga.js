import axios from "../../api/axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {SEND_MESSAGE} from "./constants";
import {setLoading} from "./actions";
import {toast} from "react-toastify";

const sendMessageAsync = (data) => {
  return axios.post("messages", {
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      state: false,
      dateTime: data.dateTime
    }
  }).then(response => response)
}

function* handleSendMessage(data) {
  try {
    yield put(setLoading(true));
    let response = yield call(sendMessageAsync, data.payload);
    if (response.status === 200) {
      toast.success('Message sent successfully...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else {
      toast.error('Something went wrong...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    yield put(setLoading(false));
  } catch (e) {
    console.error(e);
    yield put(setLoading(false));
  }
}

function* watchContactSagas() {
  yield takeLatest(SEND_MESSAGE, handleSendMessage)
}

const contactSagas = [watchContactSagas];

export default contactSagas;