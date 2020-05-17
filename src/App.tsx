import React from "react";
import "./App.css";
import dotenv from "dotenv";
import HomePage from "./pages/HomePage";

dotenv.config();

function App() {
  return <HomePage />;
}

export default App;
