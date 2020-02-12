import React, { Component } from 'react'
import { BookContext } from './Context'

export class Navbar extends Component {
    static contextType = BookContext
    render() {
        console.log(this)
        console.log(this.context)
        return (
            <div>
                <i><h2>I have {this.context.Books.length} Books to read</h2></i>
            </div>
        )
    }
}

export default Navbar
