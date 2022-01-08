import axios from "../../api/axios";
import {call, put, takeLatest} from "redux-saga/effects";
import {saveConfig} from "./actions";
import {GET_CONFIG} from "./constants";
import {setLoading} from "../../utils/loading";

const getConfigAsync = () => {
  return axios.get("configs/1").then(response => response.data)
}

function* handleGetConfig() {
  try {
    setLoading(true);
    let response = yield call(getConfigAsync);
    yield put(saveConfig(response && response.data));
    setLoading(false);
  } catch (e) {
    console.error(e);
    setLoading(false);
  }
}

function* watchHomeSaga() {
  yield takeLatest(GET_CONFIG, handleGetConfig)
}

const homeSagas = [watchHomeSaga];

export default homeSagas;