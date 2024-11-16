import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButtons = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="auth-buttons">
      <button onClick={handleSignUp} className="btn">
        Sign Up
      </button>
      <button onClick={handleSignIn} className="btn">
        Sign In
      </button>
      <button onClick={handleSettings} className="btn">
        Settings
      </button>
    </div>
  );
};

export default AuthButtons;
