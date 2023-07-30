import React, { useState, useEffect } from 'react';
import './index.css';
import { Link, useParams } from 'react-router-dom';

const Card = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductosPorCategoria = async () => {
      try {
        const categoriaActual = categoria || 'todos'; // Establecer "todos" por defecto si no hay categoría en la URL
        if (categoriaActual === 'todos') {
          // Si la categoría es "todos", realiza una solicitud para obtener todo el inventario
          const response = await fetch('http://localhost:5000/inventario/');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          if (responseData && Array.isArray(responseData)) {
            setProductos(responseData);
          } else {
            setProductos([]);
          }
        } else {
          // Si la categoría no es "todos", realiza la solicitud al backend con la categoría especificada
          const response = await fetch(`http://localhost:5000/inventario/buscarPorCategoria?categoria=${categoriaActual}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          if (responseData.data && Array.isArray(responseData.data)) {
            setProductos(responseData.data);
          } else {
            setProductos([]);
          }
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setProductos([]);
      }
    };

    fetchProductosPorCategoria();
  }, [categoria]);

  return (
    <div>
      <div className="container">
        {productos.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="card">
              <Link to={`/producto/${producto.id}`}>
                <figure>
                  <img src={producto.imagen} alt={producto.nombre} />
                </figure>
                <div className="contenido">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.precio}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Card;
