import React from 'react';
import styles from '../styles/components/MainContent.module.css'

import { PostHeader } from './PostHeader';

export function Post({ postData }) {
    const { author, timestamp, content } = postData
    
    return (
        <div className={styles.mainContent}>
            <PostHeader author={author} timestamp={timestamp} />
            <p>{content}</p>
        </div>
    );
}