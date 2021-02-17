import React, {Component} from 'react'

export default class ComentsBox extends Component {
    render() {
        return(
            <div>
                {this.props.comments.map((comment) => {
                    return(
                        <h3 key={comment.id}>{comment.message}</h3>
                    )
                })}
                <h4>numero de comentarios:{this.props.comments.length}</h4>
            </div>
        )
    }
}