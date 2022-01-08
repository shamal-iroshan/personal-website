import {SET_LOADING} from "./constants";

const initialState = {
  loading: false
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}

export default contactReducer;