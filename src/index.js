import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Erick',
  'Josue',
  'Lalo',
  'Pancho'
]

function getNombres (){
    const elementosLista = [];
    for (var i = 0; i < nombres.length; i++){
      elementosLista.push(<li>{nombres[i]} </li>);
    }
    return elementosLista;
  }


const Nombres = () => {
  return <ul> { 
    nombres.map((nombre, index) => <li key={index}>{nombre}</li>)
  }</ul>
}

const App = ()=>{
  return <div><Nombres/> </div>;
}

render(<App />, document.getElementById('root'));
