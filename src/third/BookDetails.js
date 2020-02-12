import React,{useContext} from 'react'
import { BookContext } from './Context'
import './style.css'
import './s'

export default function BookDetails({book}) {
    const { dispatch } = useContext(BookContext)
    return (
            <li>
                <h1>{book.title}</h1>
                <h6>{book.author}</h6>
                <button onClick={()=>{dispatch({type: 'REMOVE_BOOK',id: book.id})}}>Finish</button>
            </li>
    )
}
