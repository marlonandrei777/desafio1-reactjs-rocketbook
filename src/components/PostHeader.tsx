import React from 'react';
import styles from '../styles/components/PostHeader.module.css';

export function PostHeader({ author, timestamp }) {
    const { profileImage, name } = author
    
    return(
        <div className={styles.postHeader}>
            <img src={profileImage} alt="Marlon Andrei"/>
            <div className={styles.NameAndHours}>
                <strong>{name}</strong>
                <span>{timestamp}</span>
            </div>  
        </div>  
    );
}