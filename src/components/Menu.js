import React, {Component} from 'react'
import MenuIten from './MenuIten'

export default class Menu extends Component {
    render() {
        return(

            <ul>
                <MenuIten label={ "conheça" } />
                <MenuIten label={ "Estética" } />
                <MenuIten label={ "Promoções" } />
                <MenuIten label={ "Contato" } />
                
            </ul>
            
        )
    }
}