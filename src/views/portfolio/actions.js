import {GET_WORKS, SAVE_WORKS, SET_LOADING} from "./constants";

export const getWorks = () => {
  return {
    type: GET_WORKS
  }
}
export const saveWorks = (data) => {
  return {
    type: SAVE_WORKS,
    payload: data
  }
}
export const setLoading = (data) => {
  return {
    type: SET_LOADING,
    payload: data
  }
}