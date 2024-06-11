import { FC } from 'react'

import { Link } from 'react-router-dom'
import { CardProps } from '@/types/'
import { Favorite } from '@/components'

const Card: FC<CardProps> = ({ character }) => {
  const { name, thumbnail, id } = character
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <>
      <Favorite id={id} />
      <Link to={`/heroi/${id}`}>
        <img width={200} src={imageUrl} alt={name} />
        <div className="content">
          <h2>{name}</h2>
          {/* Adicione outras propriedades de character conforme necessário */}
        </div>
      </Link>
    </>
  )
}

export default Card
