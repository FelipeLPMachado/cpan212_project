import React from 'react';

const Spinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spinnerStyle = {
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#3498db',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

export default Spinner;
