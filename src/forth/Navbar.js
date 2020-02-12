import React,{useContext} from 'react'
import {BookContext} from './Context'

function Navbar() {
    const {Books} = useContext(BookContext);
    return (
        <div>
            <h1> i have {Books.length} books to read</h1>
        </div>
    )
}

export default Navbar
