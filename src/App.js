import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MyCartDis from "./MyCartDis";
import Admin from "./Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Admin></Admin>
        <MyCartDis></MyCartDis>
      </header>
    </div>
  );
}

export default App;
