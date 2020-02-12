import uuid from 'uuid/v1'

const reducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case "ADD_BOOK":
            // return [...state, {title: action.title, author: action.author ,id: uuid()}]
            return state.concat({title: action.title,author: action.author,id: uuid()})
            // state.splice(0,0,{title: action.title,author: action.author,id: uuid()});
            // return state;
        case "REMOVE_BOOK":
            return state.filter(book=>(book.id !== action.id));
        default:
            return  state;
    }
}

export default reducer;