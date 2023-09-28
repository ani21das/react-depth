import React from 'react';

function CloseTab() {
  const handleCloseClick = () => {
    // Prompt the user before closing the tab
    const confirmationMessage = 'Are you sure you want to close this tab?';
    if (window.confirm(confirmationMessage)) {
      window.close();
    }
  };

  return (
    <div className="container mt-4">
      <h1>Close Tab Example</h1>
      <button className="btn btn-danger" onClick={handleCloseClick}>
        Close Tab
          </button>
          <br />
          <br />
    </div>
  );
}

export default CloseTab;
