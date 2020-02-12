import React,{ useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

export default function BookList() {
    const {Books} = useContext(BookContext)
    return Books.length ?(
        <div className="book-list">
            <ul>
                {Books.map(book=>{
                    return (
                        <BookDetails key={book.id} book={book}></BookDetails>
                    )
                })}
            </ul>
        </div>
    ):(
        <div id='empty'>No book to read.</div>
    )
}
