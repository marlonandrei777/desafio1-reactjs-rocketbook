import Head from 'next/head';

import React, { useState} from 'react';
import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { PostHeader } from '../components/PostHeader';

import styles from '../styles/pages/Home.module.css'


export default function Home() {

  // tentar fazer no index a chamada das props e states
  const [posts, setPosts] = useState([
    {id: 3, 
      author: {
        profileImage: 'https://github.com/marlonandrei777.png',
        name: 'Rafael',
      },
      timestamp: 'há 4 min',
      content: 'Amet consectetur adipisicing elit. Eaque earum blanditiis qui quibusdam dolores quaerat rem accusantium aperiam libero. Unde asperiores repellendus dolor minima assumenda obcaecati natus iure atque enim.',
    },
    {id: 2, 
      author: {
        profileImage: 'https://github.com/marlonandrei777.png',
        name: 'Evellyn de tássia',
      },
      timestamp: 'há 8 min',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi."
    },
    {id: 1, 
      author: {
        profileImage: 'https://github.com/marlonandrei777.png',
        name: 'Marlon Andrei Lima Sena',
      },
      timestamp: 'há 10 min',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi."
    }
  ])

  
  {posts.map(post => (<li key={post.id}>{post.author.name}</li>)) } // o map com <li> pra teste
  
    
  return (
      <div className={styles.container}>
        <Head>
          <title>RocketBook</title>
        </Head>

        <Header />

        <main>
          <div className={styles.contentContainer}>
            <PostHeader/>
            <Post/>

            
          </div>
        </main>
        
      </div>
  );
}

