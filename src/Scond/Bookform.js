import React,{useContext,useState} from 'react'
import { BookContext } from '../context/BookContext'

const Bookform =()=> {

    const { addBook } = useContext(BookContext);
    const [books,setBooks] = useState({
        title: '',
    })
    const [author,setAuthor] = useState({
        author: '',
    })
    const handleChange1 =(e)=>{
        setBooks({
            [e.target.id]: e.target.value
        });
    }
    const handleChange =(e)=>{
        setAuthor({
            [e.target.id]: e.target.value
        });
    }
   const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(books.title,author.author);
        setAuthor({
            author: ''
        })
        setBooks({
            title: ''
        });
    }
    
    return (
        <div>
            <form action="/" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange1} id='title' value={books.title} />
                <input type="text" onChange={handleChange} id='author' value={author.author} />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Bookform;