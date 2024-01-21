import React, { Component } from 'react'

export class EventosES6 extends Component {

    state = {
        contador: 0
    }

    sumar = ()=>{
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar = (e)=>{
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador-1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en comoponentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <p><h3>{this.state.contador}</h3></p>
               
            </div>
        )
    }
}

export class EventosES7 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(){
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador+1
        })
    }

    restar(e){
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador-1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en comoponentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <p><h3>{this.state.contador}</h3></p>
               
            </div>
        )
    }
}