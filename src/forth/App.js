import React from 'react'
import Navbar from './Navbar'
import BookContextProvider from './Context'
import BookDetails from './BookDetails'
import BookList from './BookList'
import AddBook from './AddBook'

function App() {
    // <BookDetails></BookDetails>
    return (
        <div>
        <i>hello second february.</i>
            <BookContextProvider>
                <Navbar></Navbar>
                <AddBook></AddBook>
                <BookList></BookList>
            </BookContextProvider>
        </div>
    )
}

export default App;
