import React, { useContext } from 'react'
import { BookContext } from './Context'
import BookDetails from './BookDetails'

export default function Output() {
    const {books} = useContext(BookContext)
    return books.length? (<div>
            {books.map(book=>{
                return <BookDetails key={book.id} book={book}></BookDetails>
            })}
        </div>) : (<p>i have finished all my book Now i wiil collect some my favorite book</p>)
}
