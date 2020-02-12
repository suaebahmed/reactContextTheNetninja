import React,{ useContext } from 'react'
import { BookContext } from '../context/BookContext'


export default function BookDetails({book}) {
    const { removeBook } = useContext(BookContext);
    return (
        <li key={book.id}>
            <h2>{book.title}</h2>
            <h6>{book.author}</h6>
            <button onClick={()=>{removeBook((book.id))}}>finish</button>
        </li>
    )
}
