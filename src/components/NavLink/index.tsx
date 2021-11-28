import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface INavLinkProps {
    to: string,
    children: ReactNode,
    tabIndex?:number;
}

export function NavLink({to, children, ...rest}: INavLinkProps) {
    const router = useRouter()
    const path = router.asPath

    return (
        <Link href={to}>
            <a 
                aria-label={path.includes(to) ? `Página atual, página sobre ${to}`: `Página sobre ${to}`}
                className={path.includes(to) ? `${styles.navlink} ${styles.active}`  : styles.navlink} 
                {...rest}
            >
                {children}
            </a>
        </Link>
    )
}