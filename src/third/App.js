import React, { Component } from 'react'
import Context from './Context'
import Output from './Output'
import Navbar from './Navbar'
import BookForm from './BookForm'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Context>
                    <Output></Output>
                    <Navbar></Navbar>
                    <BookForm></BookForm>
                </Context>
            </div>
        )
    }
}
