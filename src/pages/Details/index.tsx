/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CharacterDetailsContext } from '@/context'
import { Search, Character, Comic } from '@/components'
import { useFormatIso } from '@/utils'

import brand from '/logo_menor.svg'
import { ComicProps, GetCharactersParams } from '@/types'

const Details: FC = () => {
  const { id } = useParams()
  const context = useContext(CharacterDetailsContext)
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false)

  if (!context) {
    return <div>Heroi não encontrado</div>
  }

  const { character, comics, loading, error, fetchCharacterDetails } = context

  useEffect(() => {
    const fetchInitialCharacter = async () => {
      if (!initialFetchDone) {
        fetchCharacterDetails(id!)
        setInitialFetchDone(true)
      }
    }

    fetchInitialCharacter()

    return () => {}
  }, [])

  const lastComicDate = () => {
    if (!comics) return ''
    const [fisrt] = comics
    const date =
      fisrt.dates.find((date) => date.type === 'onsaleDate')?.date || ''
    return useFormatIso(date)
  }

  const searhCharacters = (params: GetCharactersParams) => {
    console.log(params)
  }

  return (
    <main>
      <header>
        <Link to={`/`}>
          <img src={brand} className="logo" alt="Vite logo" />
        </Link>
        <Search onEnter={searhCharacters} />
      </header>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          character && (
            <section>
              <Character {...character} lastComicDate={lastComicDate()} />
              <div>
                <h2>Últimos lançamentos</h2>
                <div>
                  {comics?.map((comic: ComicProps) => (
                    <Comic {...comic} key={comic.id} />
                  ))}
                </div>
              </div>
            </section>
          )
        )}
      </div>
    </main>
  )
}

export default Details
