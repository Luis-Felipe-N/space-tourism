import styles from '../styles/pages/pageNotFound.module.scss'
import Link from 'next/link'

export default function PageNotFound() {
    return (
        <main className={styles.pageNotFound}>
            <h1>Página não encontrada.</h1>
            <Link href="/">Volte para o início.</Link>
        </main>
    )
}