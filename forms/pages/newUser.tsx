import type { NextPage } from 'next'
import * as React from 'react';
import Image from 'next/image'
import styles from '../styles/NewUser.module.css'
import { Header } from '../components/header'
import { NewUserGrid } from '../components/NewUserGridd';
import { AddressGrid } from '../components/addressGrid';
import { Button } from '@mui/material';

const NewUser: NextPage = () => (
    <div className={styles.container}>
        <Header />
        <main  className={styles.main} >
            <NewUserGrid></NewUserGrid>
            <AddressGrid/>
            <Button variant="contained"  size='large' className={styles.saveButtonAddress}>Salvar</Button>
        </main>

        <footer className={styles.footer}>
            <a
                href="https://www.linkedin.com/in/paulovictorca-fullstack/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/paulo.png" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    </div>
)

export default NewUser
