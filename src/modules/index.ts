import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";
import loading from "./loading";
import apiForm, { apiFormSaga } from "./apiForm";

const rootReducer = combineReducers({
  form: formReducer,
  loading,
  apiForm,
});

export function* rootSaga() {
  yield all([apiFormSaga()]);
}

export default rootReducer;
