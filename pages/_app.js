import { AnimatePresence } from 'framer-motion'
import { GlobalProvider } from '../src/context/globalContext';
import CursorComp from '../src/components/Cursor/CustomCursor';
import GlobalStyles from '../src/styles/GlobalStyles';

const MyApp = (props) => {
    
    const { Component, pageProps, router } = props;
        
    return(
        
        <GlobalProvider >
            <CursorComp />
            <GlobalStyles />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </GlobalProvider>
    )
}

export default MyApp
  