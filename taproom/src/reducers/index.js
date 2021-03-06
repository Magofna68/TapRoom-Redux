import formVisibleReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formOnPage: formVisibleReducer,
  masterKegList: kegListReducer
});

export default rootReducer;