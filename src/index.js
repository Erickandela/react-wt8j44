import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

const Button = () =>{
  const[counter, setCounter] = useState(0);

  useEffect (()=>{
    console.log("Me ejecuté");
    return ()=>{
      console.log("Adios");
    }
  },[]);
  return <button onClick={ ()=> setCounter(counter + 1)}> Haz Click {counter}</button>
}

const App = () =>{
  return <div> <Button /></div>;
}

render(<App />, document.getElementById('root'));
