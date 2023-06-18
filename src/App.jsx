import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-grad"/>
        <Header />
        <Home />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
}

export default App;
