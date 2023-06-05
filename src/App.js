// App.js
import React from 'react'; //Importing the React package

import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

// this is a functional component ( a basic building block in React. its job is to return the TodoList component)
function App() {

  return (
    
    <div>
      <HomePage />
      <RegistrationForm />
      <LoginForm />


    </div>

  )
 
}

export default App;
