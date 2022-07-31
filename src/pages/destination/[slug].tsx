import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NavLink } from '../../components/NavLink'
import styles from '../../styles/pages/destination.module.scss'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { destinationJson } from '../../../db.json'

interface IDestination {
    slug: string;
    name: string,
    images: {
        png: string
        webp: string;
    },
    description: string,
    distance: string,
    travel: string
}

export default function Destionation() {
    const [destination, setDestination] = useState<IDestination>()

    const {slug} = useRouter().query

    useEffect(() => {
        const tempDestination = destinationJson.filter(destination => destination.slug === slug)[0]
        setDestination(tempDestination)
    }, [slug])

    return (
        <>
        <Head>
            <title>
                {destination?.name} :: Destino
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
                { destination && (
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
                                        Lua
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="mars">
                                        Marte
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="europa">
                                        Europa
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="titan">
                                        Titan
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
                )}
           </main>
        </div>
        </>
    )
}
