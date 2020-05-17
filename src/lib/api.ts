import axios from "axios";

export const getToken = async () => {
  const keyData = {
    key: process.env.REACT_APP_KEY,
  };
  console.log(keyData);
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
  // const example = {
  //   drivers: [
  //     {
  //       avail_radius: 0,
  //       id: "string",
  //       position: {
  //         id: "string",
  //         lat: 0,
  //         long: 0,
  //       },
  //     },
  //   ],
  //   stuffs: [
  //     {
  //       id: "string",
  //       recver_name: "string",
  //       recver_position: {
  //         id: "string",
  //         lat: 0,
  //         long: 0,
  //       },
  //       sender_name: "string",
  //       sender_position: {
  //         id: "string",
  //         lat: 0,
  //         long: 0,
  //       },
  //     },
  //   ],
  // };
  const {
    data: { actions },
  } = await axios.post(`${process.env.REACT_APP_URI}/path`, value, {
    headers: {
      "API-TOKEN": token,
    },
  });

  return actions;
};
