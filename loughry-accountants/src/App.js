import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Services />
    </div>
  );
}

export default App;
