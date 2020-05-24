import axios from "axios";

export const getToken = async ({ key }: any) => {
  const keyData = {
    key,
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
    data: { actions, naver_actual_result, naver_every_result },
  } = await axios.post(`${process.env.REACT_APP_URI}/path`, value, {
    headers: {
      "API-TOKEN": token,
    },
  });

  return { actions, naver_actual_result, naver_every_result };
};
