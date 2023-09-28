// src/App.js
import React from 'react';
import EventDemo from './components/EventDemo';
import FormComponent from './components/FormComponent';
import EnterKeyPress from './components/EnterKeyPress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Handling Example</h1>
      </header>
      <EventDemo />
      <FormComponent />
      <EnterKeyPress/>
    </div>
  );
}

export default App;
