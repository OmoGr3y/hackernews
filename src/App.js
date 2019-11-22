import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List/List";

function App() {
  const helloWorld = "Welcome to the Road to learn React";
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
      <List />
    </div>
  );
}

export default App;
