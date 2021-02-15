import React from 'react'

import Time from './Time'

import Partida from './Partida'

export default class Placar extends React.Component {
    constructor() {
        super()
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
        }
    }

    marcarGolCasa() {
        const {gols_casa} = this.state
        this.setState({
            gols_casa: gols_casa + 1
        })
    }

    marcarGolVisitante() {
        const {gols_visitante} = this.state
        this.setState({
            gols_visitante: gols_visitante + 1
        })
    }
    render(){
        return(
            <div>

                <div style={ {float:"left" , "marginRight": "20px"} }>
                    <h3>Casa</h3>
                    <Time nome= { this.props.casa.nome }
                          gols= { this.state.gols_casa }
                          marcarGol= { () => this.marcarGolCasa() }
                    />
                </div>

                <div style={ {float:"left", "marginRight": "20px"} }>
                    <Partida estadio= { this.props.partida.estadio }
                             data= { this.props.partida.data }
                             horario= { this.props.partida.horario }
                    />
                </div>

                <div style={ {float:"left", "marginRight": "20px"} }>
                    <h3>Visitante</h3>
                    <Time nome= { this.props.visitante.nome }
                          gols= { this.state.gols_visitante }
                          marcarGol= { () => this.marcarGolVisitante() }
                    />

                </div>
                <div style={{clear: "both"}}></div>
            </div>
        )
    }
}