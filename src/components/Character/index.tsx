import { FC } from 'react'
import { CharacterProps } from '@/types/'
import { Favorite, BookIcon, CineIcon, Rating } from '@/components/'

const Character: FC<CharacterProps> = ({
  name,
  thumbnail,
  description,
  id,
  comics,
  series,
  lastComicDate
}) => {
  return (
    <section className="grid-detail">
      <div className="bgName">{name}</div>
      <div className="flex gap-14 text-left z-10">
        <div className="between gap-5">
          <h1 className="font-xl">{name}</h1>
          <Favorite id={id} size={32} className="text-primary" />
        </div>
        <p>{description}</p>
        <ul className="flex-row gap-14">
          <li className="flex gap-5">
            <b>Quadrinhos</b>
            <div className="flex-row gap-5">
              <BookIcon className="text-primary" />
              {comics.available}
            </div>
          </li>
          <li className="flex gap-5">
            <b>Filmes</b>
            <div className="flex-row gap-5">
              <CineIcon className="text-primary" />
              {series.available}
            </div>
          </li>
        </ul>
        <div className="flex-row gap-5">
          <b>Rating:</b> <Rating />
        </div>
        <div>
          <b>Último quadrinho</b>: {lastComicDate}
        </div>
      </div>
      <div className="z-10">
        <div className="image">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
      </div>
    </section>
  )
}

export default Character
