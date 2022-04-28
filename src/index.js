import React from "react";
import ReactDOM from "react-dom/client";
import Tabla from './tabla';
import Tablalista from "./tablaLista";
import './index.css';

const saludo = <h1> Pokemon </h1 > ;

const vista = true

const root = ReactDOM.createRoot(document.getElementById("app"));
if(vista==true){
    root.render( <Tabla />);
}else{
    root.render( <Tablalista />);
}




