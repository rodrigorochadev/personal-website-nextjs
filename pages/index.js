import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../src/components/Navigation/Header'
import SEO from '../src/components/SEO/SEO'
import Layout from '../src/components/Layout/Layout'
import { useGlobalDispatchContext, useGlobalStateContext } from '../src/context/globalContext'
import Banner from '../src/components/Sections/Banner/Banner'


export default function Home() {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <SEO title={"Index"} />
      
      {/* <p>asjdkajsd aksjd aksjd aksjd </p>
      <motion.div
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={onCursor}
        onClick={onCursor}
      >
        <Link href="/portfolio/winegrid" >To Wine</Link><br />
        <Link href="/portfolio/pathfinder-designs" >To PFD</Link>
      </motion.div> */}

      <Banner />
    </Layout>
  )
}
