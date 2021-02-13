import React from 'react'

export default class Contador extends React.Component {
    constructor() {
        super()
        this.state = {
            sexo: ""
        }
    }
    
     setSexo(sexoSelecionado) {
         this.setState({
             sexo: sexoSelecionado 
         })
     }

    render() {
        return(
           
           <div>
               <h1>Seu sexo é {this.state.sexo}</h1>
            <button onClick={() => this.setSexo("Masculino")}>Masculino</button> 
            <button onClick={() => this.setSexo("Femenino")}>Femenino</button>
           </div>
        )
    }
}
