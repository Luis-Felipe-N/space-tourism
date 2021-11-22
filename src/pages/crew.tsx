
import { GetStaticProps } from 'next'
import Image from 'next/image'
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
    const [ sliderCurrentIndex, setSliderCurrentIndex ] = useState(0)
    const [ crewCurrent, setCrewCurrent ] = useState<ICrew>()
    const labelsRef = useRef<HTMLUListElement>(null)

    function handleMoveSlider( target: HTMLElement, index: number ) {
        labelsRef.current.querySelectorAll('li').forEach( li => li.classList.remove('active'))
        target.classList.add('active')
        setSliderCurrentIndex(index)
    }

    useEffect(() => {
        if ( labelsRef.current ) {
            labelsRef.current.querySelectorAll('li').forEach( (li, index) => {
                li.addEventListener('click', ({target}) => {handleMoveSlider(target, index)})
            })
        }
    }, [labelsRef])

    useEffect(() => {
        console.log('espero q esteja em loop')
        const crew = crews[sliderCurrentIndex]
        setCrewCurrent(crew)
    },[sliderCurrentIndex, crews])

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.crew}>
                <header className={styles.crew__header}>
                    <h1>
                        <span aria-hidden="true">02</span>
                        Conheça seu destino
                    </h1>
                </header>

                {
                    crewCurrent && (
                        <section className={styles.crew__content}>
                    <div className={styles.slider}>
                        <div className={styles.slider__container}>
                            <div className={styles.slider__container_info}>
                                <h2>{crewCurrent.role}</h2>
                                <h1>{crewCurrent.name}</h1>

                                <p>{crewCurrent.bio}</p>
                            </div>

                            <ul className={styles.slider__container_labels} ref={labelsRef}>
                                <li className="active"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <img 
                            src={crewCurrent.images.png}
                            alt={`Imagem de uma pessoa: ${crewCurrent.name}`}
                        />
                    </div>
                </section>
                    )
                }
            </main>
        </div>
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
