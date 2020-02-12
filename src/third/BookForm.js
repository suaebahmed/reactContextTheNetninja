import React,{useContext,useState} from 'react'
import { BookContext } from './Context'

export default function BookForm() {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const submitHandle=(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_BOOK',title,author});/// dispatch
        setAuthor('');
        setTitle('');
    }
    return (
        <form onSubmit={submitHandle}>
            <input placeholder='Enter your title' type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder="Enter book title"/>
            <input placeholder='Enter your author' type="text" onChange={(e)=>{setAuthor(e.target.value)}} value={author} placeholder="Enter book author"/>
            <input type="submit"/>
        </form>
    )
}
