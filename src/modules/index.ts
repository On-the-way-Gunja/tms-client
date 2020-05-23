import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer as formReducer } from "redux-form";
import loading from "./loading";
import apiForm, { apiFormSaga } from "./apiForm";
import map, { mapSaga } from "./map";

const rootReducer = combineReducers({
  form: formReducer,
  loading,
  apiForm,
  map,
});

export function* rootSaga() {
  yield all([apiFormSaga(), mapSaga()]);
}

export default rootReducer;
