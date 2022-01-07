import {GET_CONFIG, SAVE_CONFIG} from "./constants";

export const getConfig = () => {
  return {
    type: GET_CONFIG
  }
}
export const saveConfig = (data) => {
  return {
    type: SAVE_CONFIG,
    payload: data
  }
}