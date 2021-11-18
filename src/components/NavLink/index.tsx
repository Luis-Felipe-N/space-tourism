import styles from './styles.module.scss'
import Link from 'next/link'
import router, { useRouter } from 'next/router'

export function NavLink({to, children}) {
    const router = useRouter()
    const path = router.asPath

    return (
        <Link href={to}>
            <a className={path.includes(to) ? `${styles.navlink} ${styles.active}`  : styles.navlink} >
                {children}
            </a>
        </Link>
    )
}