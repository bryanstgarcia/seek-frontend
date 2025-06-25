import { createContext } from 'react'

const AuthContext = createContext()

export const AuthContextManager = ({children}) => {
    // create the state here
    return <AuthContext.Provider>
        { children }
    </AuthContext.Provider>
}