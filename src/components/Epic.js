import React, {Component} from 'react'


export default class Epic extends Component {
    
    render() {
        const {icon, message} = this.props
        
        return(
            <div>
                <i className= { `fa fa-${ icon } fa-lg` } ></i>
                <h2>{ message }</h2>
            </div>
        )
    }
}