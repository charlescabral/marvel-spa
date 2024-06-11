import { FC } from 'react'
import { Grid, Card } from '@/components/'
import { ListProps, CharacterProps } from '@/types/'

const List: FC<ListProps> = ({ characters }) => {
  return (
    <Grid columns={4}>
      {characters.map((character: CharacterProps) => (
        <Card character={character} key={character.id} />
      ))}
    </Grid>
  )
}

export default List
