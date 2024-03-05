import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

// Informações dinâmicas:
// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: { Date }
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Caio Carvalho',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'caio.carvalho/doctorcare' },
    ],
    publishedAt: new Date('2024-02-23 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Fernanda Medeiros',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Boa tarde, genteee' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'fernanda.medeiros/doctorcare' },
    ],
    publishedAt: new Date('2024-02-23 17:10:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=300&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Diogo Xavier',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'diogo.xavier/doctorcare' },
    ],
    publishedAt: new Date('2024-02-25 10:17:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}