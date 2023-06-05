//index.js
// Importing to render the react components

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import RegistrationForm from './RegistrationForm';



// App is passed as the root component to be rendered
ReactDOM.render(<App />, 
// selects the html elements with id root where our react application will be mounted
document.getElementById('root'));

ReactDOM.render(<RegistrationForm />, 
// select the html elements with id register where our react app will be mounted
document.getElementById('register')
);


