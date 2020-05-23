import React from "react";
import "./App.css";
import dotenv from "dotenv";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NaverMap from "./components/NaverMap";

dotenv.config();

function App() {
  // return <HomePage />;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={HomePage}></Route>
        <Route path={"/map"} component={NaverMap}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
