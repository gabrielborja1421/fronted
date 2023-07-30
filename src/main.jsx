import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Buscador from './Buscador';
import ProductoDetalle from './ProductoDetalle';
import Card from './Card';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Buscador />,
    errorElement: <h1>ERROR 404 NOT FOUND</h1>,
    children:[
      {
        path:"/categorias/:categoria",
        element:<p></p>
      },
      {
        path:"/Producto/:id",
        element:<ProductoDetalle />
      }
      
    ]
  },
  {
    path: "/ver",
    element: <a href='/'>home</a>


  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
