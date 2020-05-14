import axios from "axios";

export const getToken = async () => {
  const keyData = {
    key: process.env.REACT_APP_KEY,
  };
  console.log(keyData);
  const {
    data: { token },
  } = await axios.post(
    "https://3000-b0da17da-5195-4929-872c-7476c926365c.ws-us02.gitpod.io/token",
    keyData,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );
  return token;
};

export const getData = async (token: string) => {
  const example = {
    drivers: [
      {
        avail_radius: 0,
        id: "string",
        position: {
          id: "string",
          lat: 0,
          long: 0,
        },
      },
    ],
    stuffs: [
      {
        id: "string",
        recver_name: "string",
        recver_position: {
          id: "string",
          lat: 0,
          long: 0,
        },
        sender_name: "string",
        sender_position: {
          id: "string",
          lat: 0,
          long: 0,
        },
      },
    ],
  };
  const {
    data: { actions },
  } = await axios.post(
    "https://3000-b0da17da-5195-4929-872c-7476c926365c.ws-us02.gitpod.io/path",
    example,
    {
      headers: {
        "API-TOKEN": token,
      },
    }
  );

  return actions;
};
