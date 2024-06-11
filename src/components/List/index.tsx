import { FC } from 'react'
import { Card } from '@/components/'
import { ListProps, CharacterProps } from '@/types/'

const List: FC<ListProps> = ({ characters }) => {
  return characters.length ? (
    <div className="grid-list grid-list-4">
      {characters.map((character: CharacterProps) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  ) : (
    <div>
      <h2 className="text-grayLight font-lg">Nenhum Herói foi encontrado</h2>
    </div>
  )
}

export default List
