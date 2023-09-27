import React from 'react';
import Border from './components/Border'; // Adjust the import path as needed

const App = () => {
  return (
    <div>
      <h1>Border Example</h1>
      
      <Border borderColor="blue" borderWidth="2px" borderStyle="dashed" borderRadius="10px">
        <p>This component has a blue dashed border with 10px border-radius.</p>
      </Border>

      <Border borderColor="red" borderWidth="3px" borderStyle="solid" borderRadius="20px">
        <button>Click me</button>
      </Border>
    </div>
  );
};

export default App;
