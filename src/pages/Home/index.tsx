/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCharacters } from '@/context'
import { GetCharactersParams } from '@/types'
import {
  List,
  Search,
  OrderSwitch,
  HeroIcon,
  HeartFillIcon,
  HeartStrokeIcon
} from '@/components/'
import { usePluralize } from '@/utils'

import brand from '/logo.svg'

const Home: FC = () => {
  const [searchParams] = useSearchParams()
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

  useEffect(() => {
    const params: GetCharactersParams = Object.fromEntries([...searchParams])
    fetchCharacters(params)
  }, [searchParams])

  const displayedCharacters = showFavorites ? filteredCharacters : characters

  const resultText = `${usePluralize('Encontrado', count)} ${count} ${usePluralize('herói', count)}`

  return (
    <main>
      <header>
        <div className="container">
          <h1 style={{ marginBottom: '2rem' }}>
            <img src={brand} className="logo" alt="Vite logo" />
          </h1>
          <div className="flex-col gap-14">
            <div>
              <h2 className="font-xl">Explore o Universo</h2>
              <p>
                Mergulhe no domínio deslumbrante de todos os personagens
                clássicos que você ama e também aqueles que você descobrirá em
                breve!
              </p>
            </div>
            <Search
              onEnter={updateCharacters}
              variation="home"
              value={searchParams?.get('nameStartsWith') || ''}
            />
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="between gap-14">
            <b className="text-grayLight">{resultText}</b>
            <div className="between gap-14">
              <div className="between gap-5 text-primary">
                <span className="align-center">
                  <HeroIcon size={32} />
                  Ordenar por nome - A/Z
                </span>
                <OrderSwitch
                  onChange={updateCharacters}
                  order={params.orderBy}
                />
              </div>
              <div>
                <button
                  className="between gap-5 text-primary"
                  onClick={handleToggleFavorites}
                >
                  {showFavorites ? <HeartStrokeIcon /> : <HeartFillIcon />}
                  {showFavorites ? 'Mostrar Todos' : 'Somente Favoritos'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <List characters={displayedCharacters} />
        )}
      </div>
    </main>
  )
}

export default Home
