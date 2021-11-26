
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
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
    const labelsRef = useRef<HTMLUListElement>(null)

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
                            <img 
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

    const response = await fetch('http://localhost:3000/api/crew')
    const crews: ICrew[] = await response.json()

    return {
        props: {
            crews
        }
    }
}
