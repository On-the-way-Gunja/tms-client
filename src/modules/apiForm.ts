import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// Action Type
const GET_TOKEN = "apiForm/GET_TOKEN";
const GET_TOKEN_SUCCESS = "apiForm/GET_TOKEN_SUCCESS";

const GET_DATA = "apiForm/GET_DATA";
const GET_DATA_SUCCESS = "apiForm/GET_DATA_SUCCESS";

export const getToken = createAction(GET_TOKEN);
export const getData = createAction(GET_DATA, (token: any) => token);

const getTokenSaga = createRequestSaga(GET_TOKEN, api.getToken);
const getDataSaga = createRequestSaga(GET_DATA, api.getData);

export function* apiFormSaga() {
  yield takeLatest(GET_TOKEN, getTokenSaga);
  yield takeLatest(GET_DATA, getDataSaga);
}

// Initial state
const initialState = {
  token: null,
  actions: null,
};

const apiForm = handleActions(
  {
    [GET_TOKEN_SUCCESS]: (state: any, action: any) => ({
      ...state,
      token: action.payload,
    }),
    [GET_DATA_SUCCESS]: (state: any, action: any) => ({
      ...state,
      actions: action.payload,
    }),
  },
  initialState
);

export default apiForm;
