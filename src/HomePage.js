import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>School of Engineering Science</h1>
      <p>Welcome to School of Engineering </p>

      <div className="button-container">
        <button className="register-button">Register</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}
