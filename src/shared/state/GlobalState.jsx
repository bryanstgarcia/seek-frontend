import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'

export const Context = createContext()

export const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}