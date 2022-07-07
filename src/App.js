import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Section from './components/Section';

function App() {
  return (
    <div className="App">
       <Header />   
      <Home />
      <Section />
    </div>
  );
}

export default App;
