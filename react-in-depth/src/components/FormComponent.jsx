import React from 'react';

function FormComponent() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading
    alert('Form submitted');
  };

  return (
      <div className="container mt-4">
          <hr />
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputText" className="form-label">Text Input</label>
          <input type="text" className="form-control" id="inputText" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <br />
          <br />
    </div>
  );
}

export default FormComponent;
