import React,{useState,createContext, useReducer,useEffect} from 'react'
import reducer from './reducer'

export const BookContext = createContext();

export default function Context(props) {
    const [books,dispatch]=useReducer(reducer,[],()=>{
        var data = localStorage.getItem('BOOK')
        return data ? JSON.parse(data):[]; //data is null or not
    });

    useEffect(() => {
        localStorage.setItem('BOOK',JSON.stringify(books));//book
    }, [books])

    // const addBook =(title,author)=>{
    //     setBooks([...books,{title,author,id: uuid()}])
    // }
    // const removeBook =(id)=>{
    //     setBooks(books.filter(book=>(book.id !== id)))
    // }

    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
