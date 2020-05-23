import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// Action Type
const GET_DIRECTION = "map/GET_DIRECTION";
const GET_DIRECTION_SUCCESS = "map/GET_DIRECTION_SUCCESS";

export const getDirection = createAction(GET_DIRECTION, ({ actions }: any) => ({
  actions,
}));

const getDirectionSaga = createRequestSaga(GET_DIRECTION, api.getDirection);

export function* mapSaga() {
  yield takeLatest(GET_DIRECTION, getDirectionSaga);
}

// Initial state
const initialState = {
  directions: [],
};

const map = handleActions(
  {
    [GET_DIRECTION_SUCCESS]: (state: any, action: any) => ({
      ...state,
      // Handle flexibly with api return
      directions: state.directions.concat(action.payload),
    }),
  },
  initialState
);

export default map;
