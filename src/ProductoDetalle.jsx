import React, { useState, useEffect } from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:5000/inventario/${encodeURIComponent(id)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('si responde y el id es', id);
        const responseData = await response.json();
        console.log('si paso', responseData);
        if (responseData && responseData.id) { // Verifica si responseData no es null o indefinido y si contiene un ID válido
          setProducto(responseData); // Actualiza el estado con el producto recibido
        } else {
          setProducto(null); // Si no se encontró el producto, establece el estado a null
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setProducto(null); // En caso de error, establece el estado a null
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div>
      {producto ? (
        <div className="producto">
         <div className="card mb-3"  style={{ width: "90%", height: "40%" }} >
            <img src={producto.imagen} className="card-img-top" alt="..."  style={{ width: "30%", height: "40%", margin:'auto'}}/>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">${producto.precio}</p>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text"><small className="text-body-secondary">{producto.categoria}</small></p>
            </div>
          </div>
          
        </div>
      ) : (
        <h1>No se encontró el producto con el ID {id}</h1>
      )}
    </div>
  );
};

export default ProductoDetalle;
