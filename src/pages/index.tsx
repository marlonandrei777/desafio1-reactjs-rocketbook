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
        name: 'Marlon Andrei',
      },
      timestamp: 'há 4 min',
      content: 'Amet consectetur adipisicing elit. Eaque earum blanditiis qui quibusdam dolores quaerat rem accusantium aperiam libero. Unde asperiores repellendus dolor minima assumenda obcaecati natus iure atque enim.',
    },
    {id: 2, 
      author: {
        profileImage: 'https://github.com/wendellcardoso.png',
        name: 'Wendell Cardoso',
      },
      timestamp: 'há 8 min',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi."
    },
    {id: 1, 
      author: {
        profileImage: 'https://github.com/RochaJG.png',
        name: 'Jordan Rocha',
      },
      timestamp: 'há 10 min',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio, culpa odio esse autem amet eaque perspiciatis voluptas quas qui fugit vel aliquam repudiandae eum sequi. elit. Nesciunt assumenda aliquid, tempora ullam, distinctio."
    }
  ])

  
  /* {posts.map(post => <li key={post.id}>{post.author.name}</li>) } */ // o map com <li> pra teste
  
  function postList() {
   const allPosts = posts.map(post => <Post postData={post} key={post.id} />)

   return <main className={styles.main}><div>{allPosts}</div></main> ;
  }

  return (
      <div className={styles.container}>
        <Head>
          <title>ReactBook</title>
        </Head>

        <Header />
        {postList()}
      </div>
  );
}

