import {combineReducers} from "redux";
import homeReducer from "../views/home/reducer";
import contactReducer from "../views/contact/reducer";
import worksReducer from "../views/portfolio/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  contactReducer: contactReducer,
  worksReducer: worksReducer
});

export default rootReducer;