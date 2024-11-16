import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButtons from '../AuthButtons';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.username === username) {
      alert('Username already exists. Please choose another.');
      return;
    }
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Sign-up successful! Please sign in.');
    navigate('/sign-in');
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <AuthButtons />
    </div>
  );
}

export default SignUp;
