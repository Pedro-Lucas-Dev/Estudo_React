import React, {Component} from 'react'

export default class Text extends Component {
    render() {
        const {tag, message} = this.props

        if(tag === "h2") {
            return(
                <h2>{ message }</h2>
            )
        }
        if(tag === "p") {
            return(
                <p>{ message }</p>
            )
        }
        return(
            <div>
               <h1>{ message }</h1>
            </div>
        )
    }
}