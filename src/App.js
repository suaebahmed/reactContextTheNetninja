import React from 'react';
import './App.css';
import BookContextP from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Bookform from './components/Bookform';

function App() {
  return (
    <div className="App">
        <BookContextP>
            <Navbar></Navbar>
            <Bookform></Bookform>
            <BookList></BookList>
        </BookContextP>
    </div>
  );
}

export default App;
