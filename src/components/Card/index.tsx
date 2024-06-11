import { FC } from 'react'

import { Link } from 'react-router-dom'
import { CardProps } from '@/types/'
import { Favorite } from '@/components'

const Card: FC<CardProps> = ({ character }) => {
  const { name, thumbnail, id } = character
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <Link to={`/heroi/${id}`}>
      <div className="card">
        <div className="card-image">
          <img width={200} src={imageUrl} alt={name} />
        </div>
        <div className="between gap-5">
          <h3 className="text-base">{name}</h3>
          <Favorite id={id} />
        </div>
      </div>
    </Link>
  )
}

export default Card
