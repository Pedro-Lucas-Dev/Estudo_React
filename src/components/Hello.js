import React, {Component} from 'react'

export default class Hello extends Component {

    
    render() {
        return(
            <div>

              <h1>olá { this.props.nome } </h1>
              <button onClick = { () => this.props.onClickBtn(this.props.nome) }>say my name</button>

            </div>

        )
    }
}