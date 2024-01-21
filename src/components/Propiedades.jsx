import React, { Component } from 'react'

export default function Propiedades(props){
    return (
        <>
        <div>{props.porDefecto}</div>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano}</li>
        </ul>
        </>
    
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las props por defecto"
};