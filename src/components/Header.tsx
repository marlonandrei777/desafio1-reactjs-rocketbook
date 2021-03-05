import React from 'react';
import styles from '../styles/components/HeaderContainer.module.css';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <span>RocketBook</span>
        </header>
    );
}