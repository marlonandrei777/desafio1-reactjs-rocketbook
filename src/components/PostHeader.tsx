import React from 'react';
import styles from '../styles/components/PostHeader.module.css';

export function PostHeader() {
    return(
            <div className={styles.postHeader}>
                <img src="https://github.com/marlonandrei777.png" alt="Marlon Andrei"/>
                <div className={styles.NameAndHours}>
                    <strong>Marlon Andrei Lima Sena</strong>
                    <span>há 3min</span>
                </div>  
            </div>
            
    );
}