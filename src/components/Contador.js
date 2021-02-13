import React from 'react'

const OPERATIOR_AVAILABLE = {
    ADD: 'ADD',
    SUB: "SUB",
    RESET: 'RESET'
}
export default class Contador extends React.Component {
    constructor() {
        super()
        this.state = {
            contador: 0
        }
    }
    
     doAction(operator) {
         const {contador} = this.state
         if (operator === OPERATIOR_AVAILABLE.ADD && contador < 9) {
            this.setState({
                contador: contador + 1
            })
         }

         if (operator === OPERATIOR_AVAILABLE.SUB && contador > 0) {
            this.setState({
                contador: contador - 1 
            })
         }

         if (operator === OPERATIOR_AVAILABLE.RESET){
            this.setState({
                contador: 0 
            })
         }
         
     }

    render() {
        const {contador} = this.state
        return(
           
           <div>
               <h1>Contador:  {contador}</h1>
            <button onClick={() => this.doAction(OPERATIOR_AVAILABLE.ADD)}>Adicionar</button> 
            <button onClick={() => this.doAction(OPERATIOR_AVAILABLE.SUB)}>Subtrair</button>
            <br />
            <button onClick={() => this.doAction(OPERATIOR_AVAILABLE.RESET)}>Reset</button>

           </div>
        )
    }
}
