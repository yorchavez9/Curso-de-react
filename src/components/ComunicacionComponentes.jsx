import React, { Component } from 'react'

export default class Padre extends Component {

    state = {
        contador: 0
    }

    incrementarContador=(e)=>{
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <div>
                <h2>Comunicacion entre componentes</h2>
                <Hijo mensaje="Mensaje para el hijo numero 1"/>
                <Hijo mensaje="Mensaje para el hijo numero 2"/>
                <Hijo incrementarContador = {this.incrementarContador}/>
            </div>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}

