import React from 'react'

import Epic from './Epic'




export default class App extends React.Component{
    render() {
        return (
            <div>

                <Epic 
                    message = {"Exclusive interactive, online community"}
                    icon = {"book"} 
                />

                <Epic 
                    message = {"Technical talks from network members and global technology leaders"} 
                    icon = {"bath"} 
                />

                <Epic 
                    message = {"Opportunities to build your personal brand"} 
                    icon = {"car"} 
                />
                

            </div>
        )
    }
 }