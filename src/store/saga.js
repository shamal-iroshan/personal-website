import {all, fork} from "redux-saga/effects";
import homeSagas from "../views/home/saga";
import contactSagas from "../views/contact/saga";
import workSagas from "../views/portfolio/saga";

export default function* rootSaga() {
  yield all(homeSagas.map(s => fork(s)));
  yield all(contactSagas.map(s => fork(s)));
  yield all(workSagas.map(s => fork(s)));
}