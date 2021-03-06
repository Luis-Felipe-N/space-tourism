/* eslint-disable @next/next/no-img-element */
import { createRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import { NavLink } from '../NavLink'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState(false)
    const ulRef = createRef<HTMLUListElement>()

    function handleOpenMenu() {
        setOpenMenu(!openMenu)
    }


    return (
        <header className={styles.header}>
            <img
                width={50}
                height={50}
                className={styles.header__logo} 
                src="/assets/shared/logo.svg" 
                alt="Logo: Ilustração de uma estrela de quatro pontas." 
            /> 
            <div className={styles.header__line}></div>
            <button
                className={styles.btnMenu}
                onClick={handleOpenMenu}
                tabIndex={0}
            >
                <span></span>
            </button>
            <nav className={openMenu ? `${styles.header__menu} ${styles.active}` : styles.header__menu}>
                <ul ref={ulRef}>
                    <li>
                        <Link href="/">
                                <a>
                                    <span aria-hidden="true">00</span> 
                                    Início
                                </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/destination/moon">
                                <a>
                                    <span aria-hidden="true">01</span> 
                                    Destino
                                </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/crew">
                                <a>
                                    <span aria-hidden="true">02</span> 
                                    Tripulação
                                </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/technology">
                                <a>
                                    <span aria-hidden="true">03</span> 
                                    Tecnologia
                                </a>
                        </Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
}