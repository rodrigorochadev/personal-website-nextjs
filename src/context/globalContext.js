import React, { createContext, useReducer, useContext } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { darkTheme, lightTheme } from '../theme/Theme'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {

    switch(action.type) {

        case "CURSOR_TYPE" : {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }

}

export const GlobalProvider = ({children}) => {
    
    const { value: isDark } = useDarkMode(false)
    const themeMode = isDark ? darkTheme : lightTheme;

    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ['hovered', 'project']
    })
  
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalDispatchContext.Provider value={dispatch}>
                <GlobalStateContext.Provider value={state}>
                    <ParallaxProvider>
                        {children}
                    </ParallaxProvider>
                </GlobalStateContext.Provider>
            </GlobalDispatchContext.Provider>
        </ThemeProvider>
    )

}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
