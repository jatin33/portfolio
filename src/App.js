import React from 'react';
import './App.css';
import About from './components/About/About';
import Projects from '../src/components/Projects/Projects';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Projects/>
      {/* <Work/> */}
    </div>
  );
}

export default App;
