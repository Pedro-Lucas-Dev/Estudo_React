import React from 'react'

export default class Partida extends React.Component {
    render() {
        const { partida, estadio, horario } = this.props
        return(
            <div>
                <h2> { partida } </h2>
                <div>
                    <span> { estadio } </span>
                    <span> - </span>
                    <span> { horario } </span>
                </div>
            </div>
        )
    }
}