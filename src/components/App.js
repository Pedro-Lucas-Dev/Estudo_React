import React from 'react'
import Autor from './Autor'
import ComentsBox from './ComentsBox'


const users = [
    {
        id: 1,
        icon: 'https://www.gravatar.com/avatar/8639b92c42e737abda577b314f8a0c11',
        name: 'Pedro',
        createAt: '40'
    },

    {
        id: 2,
        icon: 'https://www.gravatar.com/avatar/f087b0cb6343254af9efcc1d10f91125',   
        name: 'Cry',
        createAt: '30'
    },

    {
        id: 3,
        icon: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y',
        name:'Nerle',
        createAt: '20'
    }
]
const comments = [
    {
        id: 1,
        message: "comentario Pedro",
        userId: 1
    },
    {
        id: 2,
        message: "comentario Cry",
        userId: 2
     },

     {
         id: 3,
         message: 'Comentario Nerle',
         userId: 3
     },

     {
        id: 4,
        message: 'A',
        userId: 2
     },

     {
         id: 5,
         message: 'outro comentario',
         userId: 1
     },

     {
        id: 6,
        message: 'outro comentario',
        userId: 2
     }

]

export default class App extends React.Component{
    render() {
        return(
          <div>  
               {users.map((user) => { //Interacao por Linha no array
                    const commentsUser = comments.filter((comment) => {
                        return comment.userId === user.id
                    })  
                    
                   return(
                       <div key={user.name}>
                            <Autor 
                                icon={user.icon}
                                name ={user.name}
                                createAt={user.createAt} 
                            />
                            <ComentsBox 
                                comments={commentsUser}
                            />
                       </div>
                   )
               } )}
            </div>
        )
    }
 }

