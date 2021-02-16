import React, {Component} from 'react'
import Menu from './Menu'
import Button from './Button'
import Text from './Text'

export default class Header extends Component {
    

    render() {

        return(

            <div>

                <img src="https://static.wixstatic.com/media/21f064_542956bcccaa43c39f6dba4ce8cbe84f~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01/21f064_542956bcccaa43c39f6dba4ce8cbe84f~mv2.webp" />
                <Menu />
                <Button />
                <Text message={"Promoções"} />
                

            </div>
        )
    }
}