/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { api } from '../services/api'
import styles from '../styles/pages/technology.module.scss'

import { technologyJson } from '../../db.json'

interface ITechnology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
        alt: string;
    };
    description: string
}

export default function Technology() {
    
    const [ currentTechnology, setCurrentTechnology ] = useState<ITechnology>()
    const [ technologies, setTechnologies ] = useState<ITechnology[]>()
    const [ currentSliderIndex, setCurrentSliderIndex ] = useState(0)

    function handleMoveSlider( index: number ) {
        setCurrentSliderIndex(index)
    }

    useEffect(() => {
        setTechnologies(technologyJson)
    }, [])

    useEffect(() => {
        if( technologies ) {
            const technology = technologies[currentSliderIndex]
        setCurrentTechnology(technology)
        }
    },[currentSliderIndex, technologies])

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.technology}>
                <header className={styles.technology__header}>
                    <h1>
                        <span aria-hidden="true">03</span>
                        laçamento espacial 101
                    </h1>
                </header>

                <section className={styles.technology__container}>
                    <div className={styles.technology__content} >
                        <ul>
                            {
                                technologies &&
                                technologies.map( (item, index) => (
                                    <li 
                                        className={currentSliderIndex === index ? styles.active : ''} 
                                        aria-current={currentSliderIndex === index}
                                        onClick={({target}) => handleMoveSlider(index)} 
                                        key={index}
                                    >
                                        <button aria-label={`Item ${index + 1} do carrossel`} >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={styles.technology__content_info}>
                            {
                                currentTechnology && (
                                    <>
                                        <h5>A TERMINOLOGIA ...</h5>
                                        <h1>{currentTechnology.name}</h1>
                                        <p>{currentTechnology.description}</p>
                                        </>
                                )
                            }
                        </div>
                    </div   >
                    {
                        currentTechnology && (
                            <picture>
                                <source media="(max-width: 1050px)" srcSet={currentTechnology.images.landscape} />
                                <img title={currentTechnology.name} src={currentTechnology.images.portrait} alt={currentTechnology.images.alt} />
                            </picture>
                        )    
                    }
                </section>
            </main>
        </div>
    )
}
