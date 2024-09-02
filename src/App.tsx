import React from 'react';
import './App.css';
import {Header} from "../src/layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";

function App() {
  return (
    <div className="App">
    <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
