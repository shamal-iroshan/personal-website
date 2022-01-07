import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {toast} from "react-toastify";
import ReactGA from "react-ga";
import {Provider} from "react-redux";
import AppRoute from "./routes";
import configureStore from "./store/store";

const store = configureStore();
toast.configure();

const TRACKING_ID = "UA-175813532-1";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename={'/'}>
        <AppRoute/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);