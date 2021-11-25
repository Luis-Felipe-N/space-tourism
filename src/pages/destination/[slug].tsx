import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NavLink } from '../../components/NavLink'
import styles from '../../styles/pages/destination.module.scss'
import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Header } from '../../components/Header'


interface IDestination {
    name: string,
    images: {
        png: string
    },
    description: string,
    distance: string,
    travel: string
}

interface IDestinationProps {
    destination: IDestination
}

export default function Destionation({destination}: IDestinationProps) {
    const router = useRouter()

    return (
        <>
        <Head>
            <title>
                {destination.name}
            </title>
        </Head>
        <div className={styles.container}>
            <Header/>
           <main className={styles.destination}>
                <header className={styles.destination__header}>
                    <h1>
                        <span aria-hidden="true">01</span>
                        Selecione seu destino
                    </h1>
                </header>                    
                <section className={styles.destination__container}>
                    <Image 
                                                                                                                                                                                                                                                                                                                    title={destination.name}
                        src={destination.images.png}
                        width={350}
                        height={350}
                        alt={`Imagem de um corpo celeste: ${destination.name}`}
                    />
                    <div className={styles.destination__content}>
                        <nav className={styles.destination__content_header}>
                            <ul role="navigation">
                                <li>
                                    <NavLink to="moon">
                                        <a>
                                            Lua
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="mars">
                                        <a>
                                            Marte
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="europa">
                                        <a>
                                            Europa
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="titan">
                                        <a>
                                            Titan
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <h1>{destination.name}</h1>
                        <p>{destination.description}</p>

                        <div className={styles.destination__content_info}>
                            <div>
                                <span>Distancia</span>
                                <h2>{destination.distance}</h2>
                            </div>

                            <div>
                                <span>Tempo de viajem</span>
                                <h2>{destination.travel}</h2>
                            </div>
                        </div>
                    </div>
                </section>
           </main>
        </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    const destinations = ['moon', 'mars', 'europa', 'titan']
    const paths = destinations.map( destination => ({params: {slug: destination}}))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {slug} = params
    const response = await fetch(`http://localhost:3000/api/destination/${slug}`)
    const destination = await response.json()

    return {
        props: {
            destination
        }
    }
}