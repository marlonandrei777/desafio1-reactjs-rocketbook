import Head from 'next/head';

import React from 'react';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { PostHeader } from '../components/PostHeader';

import styles from '../styles/pages/Home.module.css'

export default function Home() {

  // tentar fazer no index a chamada das props e states









  return (
      <div className={styles.container}>
        <Head>
          <title>RocketBook</title>
        </Head>

        <Header />

        <main>
          <div className={styles.contentContainer}>
            <PostHeader/>
            <Post />
          </div>
        </main>
        
      </div>
  );
}

