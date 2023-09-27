import React from 'react';

const Border = ({ children, borderColor, borderWidth, borderStyle, borderRadius }) => {
  const borderStyles = {
    borderColor: borderColor || 'black',
    borderWidth: borderWidth || '1px',
    borderStyle: borderStyle || 'solid',
    borderRadius: borderRadius || '0px',
    padding: '10px', // Add some padding for better visual
  };

  return (
    <div style={borderStyles}>
      {children}
    </div>
  );
};

export default Border;
