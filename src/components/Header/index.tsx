import {useRouter} from 'next/router'

import {SignInButton} from "../SignInButton"
import {ActiveLink} from '../ActiveLink'

import styles from "./style.module.scss"

export function Header(){
    //console.log(asPath);
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src = "images/logo.svg" alt ="ig.news"/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}