import React from 'react';
import { render } from 'react-dom';

function SaludarEnIdiomas({idioma}){
  if(idioma === "es") return <p> Hola </p>;
  if(idioma === "en") return <p> Hello </p>;
}

const Saludo = ()=>{
  const nombre = 'Erick';
  return <p> <SaludarEnIdiomas idioma="es" /> {
    `${nombre}`
  } </p>;
}

const App = ()=>{
  return <h1><Saludo/> </h1>;
}

render(<App />, document.getElementById('root'));
