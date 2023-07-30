import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Navbar = () => {
  return (
    <div>
      <ul id="navbar" className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/categorias/todos" className="nav-link"><button id="button" className="nav-link" >Todos</button></Link>
        </li>
        <li className="nav-item">
          <Link to="/categorias/Informatica" className="nav-link"><button id="button" className="nav-link" >Informatica</button></Link>
        </li>
        <li className="nav-item">
          <Link to="/categorias/smart tv" className="nav-link"><button id="button" className="nav-link" >Smart Tv</button></Link>
        </li>
        <li className="nav-item">
          <Link to="/categorias/Juegos" className="nav-link"><button id="button" className="nav-link" >Juegos</button></Link>
        </li>
        <li className="nav-item">
          <Link to="/categorias/alexas" className="nav-link"><button id="button" className="nav-link" >Alexas</button></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
