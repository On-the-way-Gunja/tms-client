import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loading from "./loading";

const rootReducer = combineReducers({
  form: formReducer,
  loading,
});

export default rootReducer;
