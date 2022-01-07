import {SAVE_CONFIG} from "./constants";

const initialState = {
  config: null
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONFIG:
      return {
        ...state,
        config: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;