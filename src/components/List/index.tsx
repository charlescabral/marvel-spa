import { FC } from 'react'
import { Card } from '@/components/'
import { ListProps, CharacterProps } from '@/types/'

const List: FC<ListProps> = ({ characters }) => {
  return (
    <div className="grid-list grid-list-4">
      {characters.map((character: CharacterProps) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  )
}

export default List
