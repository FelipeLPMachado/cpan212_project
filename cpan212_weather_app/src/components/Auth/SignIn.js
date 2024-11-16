import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButtons from '../AuthButtons';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      alert('Sign-in successful!');
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
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
      <button onClick={handleSignIn}>Sign In</button>
      <AuthButtons />
    </div>
  );
}

export default SignIn;
