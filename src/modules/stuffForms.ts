import { createAction } from "redux-actions";

const CHANGE_VALUES = "stuffForm/CHANGE_VALUES"; // Change input value

const initialState = {
  stuffs: [
    {
      id: "",
      recver_name: "",
      recver_position_id: "",
      recver_position_lat: "",
      recver_position_long: "",
      sender_name: "",
      sender_position_id: "",
      sender_position_lat: "",
      sender_position_long: "",
    },
  ],
};
