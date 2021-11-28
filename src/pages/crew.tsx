
import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import styles from '../styles/pages/crew.module.scss'

interface ICrew {
    name: string;
    images: {
        png: string
    },
    role: string,
    bio: string
}

export default function Crew({crews}) {
    const [ currentSliderIndex, setCurrentSliderIndex ] = useState(0)
    const [ currentCrew, setCurrentCrew ] = useState<ICrew>()

    function handleMoveSlider( target: any, index: number ) {
        setCurrentSliderIndex(index)
    }

    useEffect(() => {
        const crew = crews[currentSliderIndex]
        setCurrentCrew(crew)
    },[currentSliderIndex, crews])

    return (
        <>
        <Head>
            <title>
                {currentCrew?.name} :: Tripulação
            </title>
        </Head>
        <div className={styles.container}>
            <Header />
            <main className={styles.crew}>
                <header className={styles.crew__header}>
                    <h1>
                        <span aria-hidden="true">02</span>
                        Conheça seu destino
                    </h1>
                </header>

                <section className={styles.crew__content}>
                    <div className={styles.slider}>
                        <div className={styles.slider__container}>
                            {
                                currentCrew && (
                                    <div className={styles.slider__container_info}>
                                        <h2>{currentCrew.role}</h2>
                                        <h1>{currentCrew.name}</h1>

                                        <p>{currentCrew.bio}</p>
                                    </div>
                                )
                            }


                            <ul aria-label="Navegação do slider" className={styles.slider__container_labels}>
                                {
                                    crews.map( (item, index) => (
                                        <>
                                        <li 
                                            className={currentSliderIndex === index ? styles.active : ''} 
                                            onClick={({target}) => handleMoveSlider(target, index)} 
                                            key={index}
                                        >
                                            <button 
                                                aria-current={currentSliderIndex === index}
                                                aria-label={currentSliderIndex === index ? `Item atual, item ${index + 1} do carrossel` : `Item ${index + 1} do carrossel`}>
                                            </button>
                                        </li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>

                        { currentCrew && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                title={currentCrew.name}
                                src={currentCrew.images.png}
                                alt={`Imagem de uma pessoa: ${currentCrew.name}`}
                            />
                        )}
                    </div>
                </section>
            </main>
        </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await axios.get('/api/crew')
    const crews: ICrew[] = await response.data

    return {
        props: {
            crews
        }
    }
}
