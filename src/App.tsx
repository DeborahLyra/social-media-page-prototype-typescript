import { Header } from './components/header/Header'
import { Posts } from './components/posts/Posts'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {

  const postsData = [
    {
      id: 1,
      author: {
        name: 'The Worried Pug',
        role: 'Web Developer',
        avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
        { type: 'link', content: '#novoprojeto' },
        { type: 'link', content: '#nlw' },
        { type: 'link', content: '#rocketseat' },
      ],
      publishedAt: new Date('2024-03-30 20:20:00')
    },
    {
      id: 2,
      author: {
        name: 'The Worried Pug',
        role: 'Web Developer',
        avatarUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
        { type: 'link', content: '#novoprojeto' },
        { type: 'link', content: '#nlw' },
        { type: 'link', content: '#rocketseat' },
      ],
      publishedAt: new Date('2024-03-30 20:20:00')
    }
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {
            postsData.map(post => {
              return (<Posts
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
