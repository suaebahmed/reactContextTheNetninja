import React,{useContext} from 'react'
import {BookContext} from './Context'

export default function Navbar() {
    const {books} = useContext(BookContext)
    return (
        <div>
            <h1>My library: </h1>
            <p>i have {books.length} to read</p>
        </div>
    )
}
