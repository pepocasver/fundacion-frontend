import React from 'react'
import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider


export const useUserContext = () => useContext(UserContext);