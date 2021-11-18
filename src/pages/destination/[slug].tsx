import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { NavLink } from '../../components/NavLink'
import styles from '../../styles/pages/destination.module.scss'
import { useEffect, useState } from 'react'


interface IDestination {
    name: string,
    images: {
        png: string
    },
    description: string,
    distance: string,
    travel: string
}

export default function Destionation() {
    const [ destination, setDestination ] = useState<IDestination>()

    const router = useRouter()
    useEffect(() => {
        const {slug} = router.query

        fetch(`http://localhost:3000/api/destination/${slug}`)
        .then( response => response.json())
        .then( responseJson => setDestination(responseJson))

    }, [router.query])

    return (
        <>
        <Head>
        </Head>
        <div className={styles.destination}>
           <main>
                <header className={styles.destination__header}>
                    <h1>
                        <span aria-hidden="true">01</span>
                        Selecione seu destino
                    </h1>
                </header>

                {
                    destination && (
                        <>
                    <title>
                        {destination.name}
                    </title>
                    
                    <section className={styles.destination__container}>
                        <Image 
                            src={destination.images.png}
                            width={350}
                            height={350}
                            alt="oi"
                        />
                        <div className={styles.destination__content}>
                            <nav className={styles.destination__content_header}>
                                <ul>
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
                    </>
                    )
                }

           </main>
        </div>
        </>
    )
}