import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">Welcome to the Home Page</h1>
      <div className="home-page__buttons">
        <Link to="/registration" className="home-page__button">
          Register
        </Link>
        <Link to="/login" className="home-page__button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
