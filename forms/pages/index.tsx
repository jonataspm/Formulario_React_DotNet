import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@mui/material'
import TableForms from '../components/table'
import { Header } from '../components/header'
import { UtilDiv } from '../components/utilDiv'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Alocate peoples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className={styles.main}>      
        <UtilDiv></UtilDiv>
        <p>Usuário</p>
        <TableForms></TableForms>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/paulovictorca-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by .{' '}
          <span>
            <Image src="/paulo.png" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
