import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface INavLinkProps {
    to: string,
    children: ReactNode,
}

export function NavLink({to, children}: INavLinkProps) {
    const router = useRouter()
    const path = router.asPath

    return (
        <Link href={to}>
            <a 
                className={path.includes(to) ? `${styles.navlink} ${styles.active}`  : styles.navlink} 
            >
                {children}
            </a>
        </Link>
    )
}