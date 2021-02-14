import React, { Component } from 'react'

export default class Botao extends Component {
    constructor() {
        super()
        this.state = {
            contadorGol: 0
        }
    }

    gol() {
      const { contadorGol } = this.state
      this.setState({
          contadorGol: contadorGol + 1
      })

    }

    render() {
        const { contadorGol } = this.state
        return(
            <div>
            <h1> { contadorGol } </h1> 
            <button onClick={() => this.gol()}>Gol</button>
            </div>
        )
    }
}