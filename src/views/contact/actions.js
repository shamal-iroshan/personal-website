import {SEND_MESSAGE, SET_LOADING} from "./constants";

export const sendMessage = (data) => {
  return {
    type: SEND_MESSAGE,
    payload: data
  }
};
export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data
  }
};