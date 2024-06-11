import { FC, useState } from 'react'
import { FavoriteProps } from '@/types/'
import { HeartFillIcon, HeartStrokeIcon } from '@/components'
import { useCharacters } from '@/context'
// import { useCharacters } from '@/context'

const Favorite: FC<FavoriteProps> = ({ id }) => {
  const { toggleFavorite, favorites } = useCharacters()
  const isFavorite = favorites.includes(id)
  const [checked, setChecked] = useState<boolean | undefined>(isFavorite)

  const handleClick = () => {
    toggleFavorite(id)
    console.log(id)

    const newChecked = !checked
    setChecked(newChecked)
  }

  return (
    <button
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={handleClick}
    >
      {checked ? <HeartFillIcon /> : <HeartStrokeIcon />}
    </button>
  )
}

export default Favorite
