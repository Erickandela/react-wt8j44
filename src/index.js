import React from 'react';
import { render } from 'react-dom';

const Saludar = ({nombre, idioma = 'en'})=>{
  const saludo = idioma === 'es' ? 'hola' : 'Hello';
  return <p> { saludo} {nombre}</p>
}

const App = () =>{
  return <div> <Saludar nombre = 'Erick' /></div>;
}

render(<App />, document.getElementById('root'));
