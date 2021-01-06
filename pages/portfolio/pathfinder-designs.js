import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import SEO from '../../src/components/SEO/SEO'
import Layout from '../../src/components/Layout/Layout'

export default function PathfinderDesgins() {


    return(
        <Layout>
            <SEO title="Pathfinder" />
            <p>Pathfinder</p>
            <Link href="/">Back to homepage</Link>
        </Layout>
    )
}