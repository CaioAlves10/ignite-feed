import { ThumbsUp, Trash } from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1573547429441-d7ef62e04b63?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Carvalho</strong>
              <time title="01 de Fevereiro de 2024 às 13:05" dateTime="2024-02-01 13:05:00">Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}