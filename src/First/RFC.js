import React from 'react'
import { BookContext } from './Context'
import { UserContext } from './Context2'

function RFC() {
    return (
        <BookContext.Consumer>{val=>{
            return(
                <UserContext>{value=>{
                    return(
                        <Inline val={val} value={value}></Inline>
                    )
                }}
                </UserContext>    
            )
        }}</BookContext.Consumer>
    )
}
export default RFC;


function Inline() {
    return (
        <div>
            
        </div>
    )
}


