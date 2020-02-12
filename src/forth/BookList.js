import React,{useContext} from 'react'
import { BookContext } from './Context'
import BookDetails from './BookDetails'


function BookList() {
    const {Books} = useContext(BookContext)
    return (
        <div>
        <ul>
        {Books.map(book=>{
            return(<BookDetails book={book} key={book.id}></BookDetails>)
        })}
        </ul>
        </div>
    )
}

export default BookList
