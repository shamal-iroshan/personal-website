import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {toast} from "react-toastify";
import ReactGA from "react-ga";

import AppRoute from "./routes";
import {updateVisitCount} from "./api";

toast.configure();

const TRACKING_ID = "UA-175813532-1";
ReactGA.initialize(TRACKING_ID);

try{
    updateVisitCount()
        .then()
} catch (e) {
    console.error(e)
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename={ '/' } >
          <AppRoute/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);