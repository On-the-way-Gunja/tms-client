import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";

// Action Type
const GET_TOKEN = "apiForm/GET_TOKEN";
const GET_TOKEN_SUCCESS = "apiForm/GET_TOKEN_SUCCESS";
const GET_TOKEN_FAILURE = "apiForm/GET_TOKEN_FAILURE";

const GET_DATA = "apiForm/GET_DATA";
const GET_DATA_SUCCESS = "apiForm/GET_DATA_SUCCESS";
const GET_DATA_FAILURE = "apiForm/GET_DATA_FAILURE";

export const getToken = createAction(GET_TOKEN);
export const getData = createAction(GET_DATA, (form: any) => form);

function* getTokenSaga(action: any) {
  yield put(startLoading(GET_TOKEN)); // Start Loading
  try {
    const token = yield call(api.getToken);
    yield put({
      type: GET_TOKEN_SUCCESS,
      payload: token,
    });
  } catch (e) {
    yield put({
      type: GET_TOKEN_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_TOKEN)); // Finish Loading
}

function* getDataSaga(action: any) {
  yield put(startLoading(GET_DATA)); // Start Loading
  try {
    const actions = yield call(api.getData, action.payload);
    yield put({
      type: GET_DATA_SUCCESS,
      payload: actions,
    });
  } catch (e) {
    yield put({
      type: GET_DATA_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_DATA)); // Finish Loading
}

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
