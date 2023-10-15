import React from 'react';
import './App.css';
import Header from '/Users/arneshpal/Downloads/react-task-6/src/Components/Header.js';
import About from 'src/Components/About.js';
import Projects from '/Users/arneshpal/Downloads/react-task-6/src/Components/Project.js';
import Contact from 'src/Components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

