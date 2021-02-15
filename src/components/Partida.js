import React from 'react'

export default class Partida extends React.Component {
    render() {
        return(
            <div>
                <h2> { this.props.partida } </h2>
                
                <div>

                    <span> { this.props.estadio } </span>
                    <span> - </span>
                    <span> { this.props.horario } </span>
                </div>

            </div>
        )
    }
}