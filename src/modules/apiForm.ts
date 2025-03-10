import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// Action Type
const GET_TOKEN = "apiForm/GET_TOKEN";
const GET_TOKEN_SUCCESS = "apiForm/GET_TOKEN_SUCCESS";

const GET_DATA = "apiForm/GET_DATA";
const GET_DATA_SUCCESS = "apiForm/GET_DATA_SUCCESS";

const CLEAR = "apiForm/CLEAR";

export const getToken = createAction(GET_TOKEN, ({ key }: any) => ({ key }));
export const getData = createAction(GET_DATA, ({ token, value }: any) => ({
  token,
  value,
}));
export const clear = createAction(CLEAR);

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
  naver_actual_result: null,
  naver_every_result: null,
  submitted: false,
};

const apiForm = handleActions(
  {
    [GET_TOKEN_SUCCESS]: (state: any, action: any) => ({
      ...state,
      token: action.payload,
    }),
    [GET_DATA_SUCCESS]: (state: any, action: any) => ({
      ...state,
      actions: action.payload.actions,
      naver_actual_result: action.payload.naver_actual_result,
      naver_every_result: action.payload.naver_every_result,
      submitted: true,
    }),
    [CLEAR]: (state: any, action: any) => ({
      ...state,
      submitted: false,
    }),
  },
  initialState
);

export default apiForm;
