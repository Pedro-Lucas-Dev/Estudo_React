import React, {Component} from 'react'

export default class Autor extends Component {
    render() {
        return(

            <div>
                <img src={this.props.icon} />
                <h2>{this.props.name}</h2>
                <h3>{this.props.createAt}</h3>
            </div>
        )
    }
}