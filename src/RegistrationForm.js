import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file

export default function RegistrationForm() {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredData, setRegisteredData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform form validation
    if (studentID.trim() === '') {
      setError('Please enter your Student ID.');
      return;
    }
    if (name.trim() === '') {
      setError('Please enter your Name.');
      return;
    }
    if (email.trim() === '') {
      setError('Please enter your UG Student Mail.');
      return;
    }
    if (password.trim() === '') {
      setError('Please enter a valid Password.');
      return;
    }

    // If the form is valid, Perform data processing
    const data = {
      studentID,
      name,
      email,
      password,
    };

    // Set the registered data
    setRegisteredData(data);

    // Reset the form
    setStudentID('');
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <h2>Student Registration</h2>
        {error && <div className="error">{error}</div>}
        <label>
          Student ID:
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
        </label>

        <label>
          Student Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Student Mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Register</button>
      </form>

      {/* Display registered data */}
      {registeredData && (
        <div>
          <h2>Student Data</h2>
          <p>Student ID: {registeredData.studentID}</p>
          <p>Name: {registeredData.name}</p>
          <p>Email: {registeredData.email}</p>
          <p>Password: {registeredData.password}</p>
        </div>
      )}
    </div>
  );
}
