import {combineReducers} from "redux";
import homeReducer from "../views/home/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer
});

export default rootReducer;