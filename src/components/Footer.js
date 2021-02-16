import React, {Component} from 'react'
import Text from './Text'

export default class Footer extends Component {
    
    render() {

        return(

            <div>

                <Text 
                    message={ " 2017. SPA TRAINING. Todos direitos reservados" } 
                    tag={"p"}
                    />

            </div>
        )
    }
}