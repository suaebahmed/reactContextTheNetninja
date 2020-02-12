import React, { Component, createContext,useState } from 'react'
export const BookContext = createContext() // BookContext shoul be exported

const BookContextProvider =(props)=>{ //props must have
    const [Books, setBooks] = useState([
        {title: "Intro Java",author: "suaeb ahmed", id: 0},
        {title: "Intro JavaScript Programming",author: "titon ahmed", id: 1},
        {title: "Data Structure",author: "Al-amin khan", id: 2},
        {title: "computation",author: "Chris murphy", id: 3}
    ]);
    const addBook = (title,author)=>{
        setBooks([...Books,{title,author,id: 4}])
    }
    const removeBook = (id) =>{
        setBooks(Books.filter(book=>(book.id !== id)))
    }
    // pass other method and data member
    return (
        <BookContext.Provider value={{Books,addBook,removeBook}}> 
            {props.children}
        </BookContext.Provider>
    )
}
// value ={{Books}} -- we pass actually object
export default BookContextProvider;