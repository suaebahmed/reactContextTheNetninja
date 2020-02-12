import React, { createContext , useState, useReducer, useEffect} from 'react'
import BookList from './BookList'
// import uuid from 'uuid';

export const BookContext = createContext();

function BookContextProvider(props) {
    // const [Books, setBooks] = useState([
    //     {title: 'title 1',author: 'suaeb',id: 1},
    //     {title: 'title 2',author: 'titon',id: 2},
    // ]);
    //const addBook=()=>{}
    //const romeBook=()=>{}
    const [Books,dispatch]=useReducer(reduer,[
        {title: 'title 1',author: 'suaeb',id: 1},
        {title: 'title 2',author: 'titon',id: 2},
    ]);
    useEffect(()=>{
        console.log(Books)
    })
    return (
        <BookContext.Provider value={{Books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;
// -----------------------------------------------------

const reduer=(state,action)=>{
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{title: action.payload.title,author: action.payload.author,id: action.payload.id}]
            case 'REMOVE_BOOK':
            return state.filter(book=>(book.id != action.id))
        default:
            return state;
    }
}

