import React from 'react'

import Placar from './Placar'

const dados = {

    partida: {
        estadio: "Maracanâ/RJ",
        data: "14/02/2021",
        horario: "20h"     
    },

    casa: {
        nome: "Vasco",
    },

    visitante: {
        nome: "Flamengo"
    }

}

export default class App extends React.Component{
    render() {
        return <Placar {...dados} />
    }
 }