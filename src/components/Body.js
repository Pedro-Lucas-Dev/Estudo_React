import React, {Component} from 'react'
import Text from './Text'

export default class Body extends Component {

    render() {

        return(

            <div>
                <Text message={ "Acesso nosso Instragram e Conheça nossas ofertas especiais!" } />
                <Text 
                    message={ "Nosso Insta: @spatraining" } 
                    tag={"p"}
                />
                <Text message={ "Aproveite a oportunidade!" } />
                <Text 
                    message={ "Adquira um pacote de Estética e Ganhe uma Massagem Relaxante!" } 
                    tag={"h2"}
                    />
                <Text 
                    message={ "Mande-nos um whatsapp e lhe enviaremos todos os" } 
                    tag={"h2"}
                    />
                <Text 
                    message={ "detalhes e preços atualizados! " } 
                    tag={"h2"}
                    />
                <button>Eu quero</button>

            </div>

        )
    }
}