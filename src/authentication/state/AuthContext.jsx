import { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthContextManager = ({ children }) => {
    const [userAuth, setUserAuth] = useState({token: null, userId: null})
    
    const authenticate = ({ userId = null, token = null}) => {
        setUserAuth({ userId, token })
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
    }
    
    useState(() => {
        const token = localStorage.getItem("token")
        const userId = localStorage.getItem("userId")
        if (token  && userId) {
            setUserAuth({
                userId,
                token
            })
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{ userAuth, authenticate }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }