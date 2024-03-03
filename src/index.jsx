import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Multipleimage from './pages/Multipleimage';
import "../src/sass/style.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Multipleimage/>
  </React.StrictMode>
);


