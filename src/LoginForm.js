import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

export default function LoginForm() {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (studentID.trim() === '') {
      setError('Please enter your Student ID.');
      return;
    }
    if (pin.trim() === '') {
      setError('Please enter a valid PIN.');
      return;
    }

    // if the form is valid, perform data processing
    const data = {
      studentID,
      pin,
    };

    // set the login data
    setLoginData(data);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>Student Login</h2>
        <label>
          Student ID:
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
        </label>

        <label>
          PIN:
          <input
            type="number"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {/* Display error message if any */}
      {error && <p className="error-message">{error}</p>}

      {/* Display login data */}
      {loginData && (
        <div>
          <h2>Student Login Data</h2>
          <p>Student ID: {loginData.studentID}</p>
          <p>PIN: {loginData.pin}</p>
        </div>
      )}
    </div>
  );
}
