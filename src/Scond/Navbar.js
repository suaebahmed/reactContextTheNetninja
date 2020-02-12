import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext'

export default function Navbar() {
   const {Books} = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Suaeb reading list :</h1>
            <p>Currently I have {Books.length} books to ready properly</p>
        </div>
    )
}
