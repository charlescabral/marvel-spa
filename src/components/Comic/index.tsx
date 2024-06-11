import { FC } from 'react'

import { Link } from 'react-router-dom'
import { ComicProps } from '@/types/'

const Comic: FC<ComicProps> = ({ thumbnail, title, id }) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <Link to={`/heroi/${id}`}>
      <img width={200} src={imageUrl} alt={title} />
      <div className="content">
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default Comic
