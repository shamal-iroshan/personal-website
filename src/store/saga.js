import {all, fork} from "redux-saga/effects";
import homeSagas from "../views/home/saga";

export default function* rootSaga() {
  yield all(homeSagas.map(s => fork(s)));
}