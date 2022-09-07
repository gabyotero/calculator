import React from "react";
import '../styles/BotonClear.css';

const BotonClear = (props) =>(
    <button className="boton-clear" onClick={props.manejarClick}>
        { props.children }
    </button>
);
export default BotonClear;