import React, { Component, createContext } from 'react'

export const BookContext = createContext();
class ContextProvider extends Component {
        state={
            Books: [
                {title: 'title 1',author: 'author 1',id: 1},
                {title: 'title 2',author: 'author 2',id: 2},
            ]
        }
        addBook = () =>{

        }
        removeBook= (id) =>{
            const newBooks = this.state.Books.filter(book=>(book.id != id));
            this.setState({
                Books : newBooks
            })
        }
    render() {
        return (
            <BookContext.Provider value={{Books: this.state.Books}}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

export default ContextProvider
