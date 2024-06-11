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
    <section className="grid-detail gap-14">
      <div className="flex gap-10 text-left ">
        <div className="between gap-5">
          <h1 className="font-xl">{name}</h1>
          <Favorite id={id} size={32} className="text-primary" />
        </div>
        <p>{description}</p>
        <ul className="flex-row gap-5">
          <li>
            <b>Quadrinhos</b>
            <div className="flex-row gap-5">
              <BookIcon className="text-primary" />
              {comics.available}
            </div>
          </li>
          <li>
            <b>Filmes</b>
            <div className="flex-row gap-5">
              <CineIcon className="text-primary" />
              {series.available}
            </div>
          </li>
        </ul>
        <div>
          <b>Rating</b>: <Rating />
        </div>
        <div>
          <b>Último quadrinho</b>: {lastComicDate}
        </div>
      </div>
      <div>
        <div className="image">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
      </div>
    </section>
  )
}

export default Character
