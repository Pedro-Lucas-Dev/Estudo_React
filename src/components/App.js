import React from 'react'

import Placar from './Placar'

import Hello from './Hello'



export default class App extends React.Component{

    sayMyName(nome) {
      alert(
          nome
      )
    }

    render() {
        return (
            <div>

                <Hello 
                    nome = { "pedro" } 
                    onClickBtn = { (nome) => this.sayMyName(nome) }
                />
                <Hello 
                     nome = { "charle" } 
                     onClickBtn = { (nome) => this.sayMyName(nome) }
                />

            </div>
        )
    }
 }