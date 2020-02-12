import React, { Component } from 'react'
import ContextProvider from './Context'
import Navbar from './Navbar'
import Home from './Home'
import RFC from './RFC'
//  this is my first context about

class App extends Component {
    render() {
        // <RFC></RFC>
        return (
            <div>
            <h1>hello React and C++</h1>
                <ContextProvider>
                    <Navbar></Navbar>
                    <Home></Home>
                </ContextProvider>
            </div>
        )
    }
}

export default App;
