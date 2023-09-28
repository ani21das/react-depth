import React from 'react';

function EnterKeyPress() {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert('Enter key pressed');
     }
  };

  return (
    <div className="container mt-4">
      <h1>React Enter Key Example</h1>
      <div className="mb-3">
        <label htmlFor="textInput" className="form-label">Text Input</label>
        <input
          type="text"
          className="form-control"
          id="textInput"
          onKeyPress={handleKeyPress}
              />
              <br />
              <br />

      </div>
    </div>
  );
}

export default EnterKeyPress;
