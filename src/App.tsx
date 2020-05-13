import React from "react";
import "./App.css";
import axios from "axios";
import dotenv from "dotenv";
import HomePage from "./pages/HomePage";

dotenv.config();

const getData = async () => {
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
        "API-TOKEN": process.env.REACT_APP_TOKEN,
      },
    }
  );

  return actions;
};

function App() {
  getData().then((res) => console.log(res));

  return <HomePage />;
}

export default App;
