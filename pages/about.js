import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
  return (
    <div>
        <Head>
            <title>
                About
            </title>
        </Head>

        <main className={styles.title}>
            <h1>Welcome to About page</h1>
        </main>
    </div>
  )
}

export default About