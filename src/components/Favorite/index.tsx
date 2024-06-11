import { FC, useState } from 'react'
import { FavoriteProps } from '@/types/'
import { HeartFillIcon, HeartStrokeIcon } from '@/components'
import { useCharacters } from '@/context'

const Favorite: FC<FavoriteProps> = ({ id }) => {
  const { toggleFavorite, favorites } = useCharacters()
  const isFavorite = favorites.includes(id)
  const [checked, setChecked] = useState<boolean | undefined>(isFavorite)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const newChecked = !checked
    setChecked(newChecked)
    toggleFavorite(id)
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
