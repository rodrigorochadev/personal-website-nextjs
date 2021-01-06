import { motion } from 'framer-motion'
import React from 'react'
import Header from '../Navigation/Header'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'

const Layout = ({children}) => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Header onCursor={onCursor}/>
            <main>{children}</main>
        </motion.div>
    )
}

export default Layout;