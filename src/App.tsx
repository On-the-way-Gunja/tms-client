import React from "react";
import "./App.css";
import dotenv from "dotenv";
import HomePage from "./pages/HomePage";
import { getToken, getData } from "./lib/api";

dotenv.config();

const apiTest = async () => {
  const token = await getToken();
  console.log(token);
  const res = await getData(token);
  console.log(res);
};

function App() {
  // apiTest();

  return <HomePage />;
}

export default App;
