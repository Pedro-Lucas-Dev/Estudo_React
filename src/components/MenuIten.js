import React, {Component} from 'react'


export default class MenuIten extends Component {
    render() {
        const {label} = this.props
        return(
                 <li>{label}</li>
        )
    }
}