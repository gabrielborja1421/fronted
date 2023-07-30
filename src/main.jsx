import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Buscador from './Buscador';
import App from './App';
import Navbar from './Navbar';
import Card from './Card';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Buscador />


    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
