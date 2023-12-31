import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Card from './Card';

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/inventario/buscar?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();

      // Verificar si "data" está presente en la respuesta antes de actualizar el estado
      if (responseData.data && Array.isArray(responseData.data)) {
        setSearchResults(responseData.data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching data from API:', error);
      setSearchResults([]);
    }
  };
  
  return (
    <div>
      <Link to="/"><img className= "home"src='src\assets\img\boton-de-inicioAzulClaro.png'></img></Link>
      
      <div>
        <Outlet />
      </div>
      <div className="buscar">
        <input
          type="text"
          placeholder="buscar"
          value={searchTerm}
          onChange={handleInputChange}
          required
        />
        <div
          className="btn"
          style={{ fontSize: '1.4em', color: 'black' }}
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="resultados">
        {searchResults.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          searchResults.map((result) => (
            <div key={result.id} className="resultado">
              <div className="container">
                {/* Utiliza el componente Link para enlazar al detalle del producto */}
                <Link to={`/producto/${result.id}`}>
                  <div className="card" style={{ width: '300px', height: '300px' }}>
                    <figure>
                      <img src={result.imagen} alt={result.nombre} />
                    </figure>
                    <div className="contenido">
                      <h3>{result.nombre}</h3>
                      <p>{result.precio}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <App />
      <Navbar />
      <Card />
    </div>
  );
};

export default Buscador;
