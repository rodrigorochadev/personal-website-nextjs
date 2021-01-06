import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../../src/components/Navigation/Header'
import SEO from '../../src/components/SEO/SEO'
import Layout from '../../src/components/Layout/Layout'

export default function Winegrid() {


    return(
        <Layout>
            <SEO title="Winegrid" />
            <p>Wine</p>
            <Link href="/">Back to homepage</Link>
        </Layout>
    )
}