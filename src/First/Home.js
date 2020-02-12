import React, { Component } from 'react'
import { BookContext } from './Context'

export class Home extends Component {
    render() {
        return(
            <BookContext.Consumer>{value=>{
                console.log(value)
                return(
                    <div>
                        <p>I am Consumer method in Home page</p>
                   </div>
                )
            }}</BookContext.Consumer>
    
        )
    }

}

export default Home
