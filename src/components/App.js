import React from 'react'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'


export default class App extends React.Component{
    render() {
        return(
            <div>
                <Header /> 
                <hr />
                <Body />
                <hr />
                <Footer />
            </div>
        )
    }
 }