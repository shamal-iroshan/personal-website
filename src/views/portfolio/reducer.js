import {SAVE_WORKS, SET_LOADING} from "./constants";

const initialState = {
  works: null,
  loading: false
}

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_WORKS:
      return {
        ...state,
        works: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default: return state;
  }
}

export default worksReducer;