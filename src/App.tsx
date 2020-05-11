import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import dotenv from "dotenv";

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
