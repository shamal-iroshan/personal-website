import axios from "../../api/axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {GET_WORKS} from "./constants";
import {saveWorks, setLoading} from "./actions";

const getWorksAsync = () => {
  return axios.get("works").then(response => response.data)
}

function* handleGetWorks() {
  try {
    yield put(setLoading(true));
    let response = yield call(getWorksAsync);
    yield put(saveWorks(response.data))
    yield put(setLoading(false));
  } catch (e) {
    console.error(e);
    yield put(setLoading(false));
  }
}

function* watchWorksSagas() {
  yield takeLatest(GET_WORKS, handleGetWorks)
}

const workSagas = [watchWorksSagas];

export default workSagas;