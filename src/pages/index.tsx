import styles from '../styles/pages/home.module.scss'

import { Button } from '../components/Button';

export default function Home() {
    return (
        <>
            <main className={styles.home}>
                <section className={styles.home__container}>
                    <div>
                        <h3>É isso, você quer viajar para o</h3>
                        <h1>Espaço</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <Button>Explorar</Button>
                </section>
            </main>
        </>
    )
}