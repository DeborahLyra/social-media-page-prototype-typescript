import { format, formatDistanceToNow } from 'date-fns' //biblioteca para usar Date
import { ptBR } from 'date-fns/locale/pt-BR' //biblioteca mudar o idioma 

import styles from './Posts.module.css'
import { Comment } from '../comment/Comment'
import { Avatar } from '../avatar/Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

export interface Content {
  type: 'paragraph' | 'link',
  content: string;
}

interface PostProps {
  author: Author,
  publishedAt: Date,
  content: Content[],
}

export function Posts({ author, publishedAt, content }: PostProps) {

  const [comments, setComments] = useState([
    'muito bacana',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const dateFormated = format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBR,
  })

  const dateFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleNewComment = (event: FormEvent) => {
    event.preventDefault()

    //const newCommentText = event.target.comment.value //coloca o name na textarea aí consegue pegar com o target

    setComments([...comments, newCommentText])

    //event.target.comment.value = ''

    setNewCommentText('') //precisa colocar que o value da textarea é = ao newComment para que possa apagar o  que tem escrito na textarea
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)

  }

  const deleteComment = (commentToDelete: string) => {
    const newCommentList = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(newCommentList)
  }

  const isBtnDisabled = newCommentText.length === 0

  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormated} dateTime={publishedAt.toISOString()}>
          {dateFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type == 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type == 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name='comment'
          value={newCommentText}
          placeholder='deixe um comentário'
          onChange={handleNewCommentChange}
         
        />
        <footer>
          <button type='submit' disabled={isBtnDisabled}>Publicar</button>
        </footer>
        {/* precisou criar esse footer para alterar o bnt no css */}
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          })
        }

      </div>
    </article>
  )
}
