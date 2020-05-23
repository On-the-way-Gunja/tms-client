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
    data: { actions },
  } = await axios.post(`${process.env.REACT_APP_URI}/path`, value, {
    headers: {
      "API-TOKEN": token,
    },
  });
  console.log(actions);
  return actions;
};

export const getDirection = async ({ actions }: any) => {
  console.log("actions:", actions);
  const url = `${process.env.REACT_APP_NAVER_MAP_DIRECTION_URI}?start=127.01168,37.5694&goal=127.04531599,37.55772`;
  console.log("url:", url);
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_MAP_KEY,
        "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_MAP_SECRET,
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log(Object.keys(error), error.message);
  }
};
