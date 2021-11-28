import Head from 'next/head'

import styles from '../styles/pages/home.module.scss'

import { Button } from '../components/Button';
import { Header } from '../components/Header';

export default function Home() {
    return (
        <>
        <Head>
            <title>
                Space :: Inicio
            </title>
        </Head>
        <div className={styles.container}>
        <Header />
            <main  className={styles.home}>
                <section className={styles.home__container}>
                    <div>
                        <h3>É isso, você quer viajar para o</h3>
                        <h1>Espaço</h1>
                        <p>Vamos encarar; se você quiser ir para o espaço, é melhor ir genuinamente para o espaço sideral e não ficar pairando sobre ele. Bem, sente-se e relaxe, porque nós vamos dar a você uma experiência verdadeiramente fora deste mundo!</p>
                    </div>
                    <Button>Explorar</Button>
                </section>
            </main>
        </div>
        </>
    )
}