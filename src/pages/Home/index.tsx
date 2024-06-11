import { FC, useState } from 'react'
import { useCharacters } from '@/context'
import { GetCharactersParams } from '@/types'
import { List, Search, OrderSwitch } from '@/components/'
import { usePluralize } from '@/utils'

const Home: FC = () => {
  const {
    characters,
    filteredCharacters,
    count,
    loading,
    error,
    params,
    fetchCharacters,
    filterFavorites
  } = useCharacters()
  const [showFavorites, setShowFavorites] = useState(false)

  const updateCharacters = (newParams: GetCharactersParams) => {
    fetchCharacters({ ...params, ...newParams })
  }

  const handleToggleFavorites = () => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites)
    if (!showFavorites) {
      filterFavorites()
    }
  }

  const displayedCharacters = showFavorites ? filteredCharacters : characters

  const resultText = `${usePluralize('encontrado', count)} ${count} ${usePluralize('herói', count)}`

  return (
    <div>
      {resultText}
      <button onClick={handleToggleFavorites}>
        {showFavorites ? 'Mostrar Todos' : 'Somente Favoritos'}
      </button>
      <Search onEnter={updateCharacters} />
      <OrderSwitch onChange={updateCharacters} order={params.orderBy} />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <List characters={displayedCharacters} />
        )}
      </div>
    </div>
  )
}

export default Home
