import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header>
            <h1>Weather App</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/sign-up">Sign Up</Link>
              <Link to="/sign-in">Sign In</Link>
              <Link to="/settings">Settings</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
