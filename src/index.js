import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {toast} from "react-toastify";
import {updateVisitCount} from "./api";

import AppRoute from "./routes";

toast.configure();

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