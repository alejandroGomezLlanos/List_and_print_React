import "./styles.css";
import PropTypes from "prop-types";
import { useState } from "react";

//creando funcion master que desestructura

export const App = () => {
  const [valores, setValor] = useState(["valor1"]);
  const [valor, setValor2] = useState("");

  //crear 2 funciones para alterar valor en arreglo

  //agregar valor al arreglo
  const onAddValue = () => {
    //tomo valor y lo asigno a lista (la lista es value)
    setValor((list) => [...list, valor]);
    //console.log(e);
    //ahora hacemos el textfield en blanco
    setValor2("");
  };

  //setear el valor
  //llamamos el evento (la etiqueta entera)
  //y sacamos su valor
  const onSetValue = (evento) => {
    setValor2(evento.target.value);
  };

  return (
    <div className="App">
      <h1>Escribir en textfield e imprimir</h1>
      <input
        type="text"
        value={valor}
        onChange={(evento) => onSetValue(evento)}
      ></input>
      <button onClick={() => onAddValue()}> aceptar</button>
      <h2>Valor de variable:</h2>
      <ol>
        {valores.map((valor, llave) => {
          return <li llave={llave}> {valor} </li>;
        })}
      </ol>
    </div>
  );
};

//constructor

App.propTypes = {
  value: PropTypes.string.isRequired
};

//valores por defecto
//este es nuestro constructor por si no mandamos nada
App.defaultProps = {
  value: ""
};

export default App;
