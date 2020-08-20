import React from "react";

import "./App.css";
import Header from "./Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Content from "./Content/Content";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="contentBlock">
          <Switch>
            <Route path="/employees" render={() => <Content />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
