import axios from "axios";

export const getToken = async () => {
  const keyData = {
    key: process.env.REACT_APP_KEY,
  };
  const {
    data: { token },
  } = await axios.post(`${process.env.REACT_APP_URI}/token`, keyData, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  return token;
};

export const getData = async ({ token, value }: any) => {
  const {
    data: { actions, naver_actual_result },
  } = await axios.post(`${process.env.REACT_APP_URI}/path`, value, {
    headers: {
      "API-TOKEN": token,
    },
  });

  return { actions, naver_actual_result };
};
