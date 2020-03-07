import React from 'react';
import './App.css';

import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-1} condition="Clear" city="Sydney" country="AU"/>
    </div>
  );
}

export default App;
