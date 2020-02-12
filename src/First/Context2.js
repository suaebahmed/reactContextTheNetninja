import React, { createContext, useState } from 'react'

export const UserContext = createContext()
function Context2(props) {
    const [user,setUser]=useState({firstName: 'suaeb',lastName: 'ahmed'})
    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Context2
