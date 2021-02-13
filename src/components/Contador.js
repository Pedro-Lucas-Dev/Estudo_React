import React from 'react'

export default class Contador extends React.Component {
    constructor() {
        super()
         this.state = {
             contador: 0
         }
    }

     aumentar() {
         const {contador} = this.state
         if (contador === 10) {
             return
         }
         this.setState({
             contador: contador + 1 
         })
     }
     diminuir() {
         const {contador} = this.state
         if (contador === 0) {
            return
         }
        this.setState({
            contador: contador - 1
        })
     }
      reseta(){
          this.setState({
              contador: 0
          })
      }

    render() {
        const {contador} = this.state
        return(
           
           <div>
              <h1>{contador}</h1>
             <button onClick={this.aumentar.bind(this)}>+</button>
             <button onClick={this.diminuir.bind(this)}>-</button>
             <br/> <button onClick={this.reseta.bind(this)}>Resetar</button>
           </div>
        )
    }
}
