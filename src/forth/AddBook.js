import React, { useContext,useState } from 'react'
import { BookContext } from './Context'

function AddBook() {
    const [book, setBook] = useState({title: '',author: '',id: 3})
   const {dispatch} =useContext(BookContext)
   const allHandle=()=>{
       if(book.title == ''){
        console.log('titon Please Enter book info')
    }
       else if(book.author == ''){
           console.log('titon Please Enter info')
       }
       else{
           setBook({title: '',author: '',id: book.id+1});
           dispatch({type: 'ADD_BOOK',payload: book})
       }
   }
    return (
        <div>
            <input placeholder="Enter your book Name:" type="text" onChange={(e)=>{setBook({...book,title: e.target.value})}}
            value={book.title}/>
            <input placeholder="Enter your author Name: " type="text" onChange={(e)=>{setBook({...book,author: e.target.value})}}
            value={book.author}/>
            <button onClick={allHandle}>add book</button>
            {JSON.stringify(book)}
        </div>
    )
}

export default AddBook
