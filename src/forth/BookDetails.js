import React,{useContext} from 'react'
import { BookContext } from './Context'
import './style.css'

function BookDetails({book}) {
    const {dispatch} = useContext(BookContext)
    return (
        <div id="list">
            <h3>{book.title}</h3>
            <h6>{book.author}</h6>
            <button onClick={()=>{dispatch({type: 'REMOVE_BOOK',id: book.id})}}>finish</button>
        </div>
    )
}

export default BookDetails
