import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Introduction from './components/Introduction';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <Introduction />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
