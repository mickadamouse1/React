import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Introduction from './components/Introduction';
import Services from './components/Services';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Introduction />
      <Services />
      <About />
    </div>
  );
}

export default App;
