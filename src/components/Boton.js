import React from "react";
import '../styles/Boton.css';

function Boton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && ( valor !== '='); //retorna true si no es numero y false si sí es
    }
    return(
        <button onClick={ () => props.manejarClick(props.children)} className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trim()}>
            { props.children }
        </button>

    );
}
export default Boton;