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
      fisrt?.dates.find((date) => date.type === 'onsaleDate')?.date || ''
    return useFormatIso(date)
  }

  const searhCharacters = (params: GetCharactersParams) => {
    console.log(params)
  }

  return (
    <main className="bg-primary-light">
      <header>
        <div className="container">
          <div className="start gap-14">
            <Link to={`/`}>
              <img src={brand} className="logo" alt="Vite logo" />
            </Link>
            <Search onEnter={searhCharacters} />
          </div>
        </div>
      </header>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          character && (
            <section className="container">
              <div className="flex gap-14">
                <Character {...character} lastComicDate={lastComicDate()} />
                {!!comics?.length && (
                  <div className="text-left">
                    <h2>Últimos lançamentos</h2>
                    <div className="grid-list grid-list-5">
                      {comics?.map((comic: ComicProps) => (
                        <Comic {...comic} key={comic.id} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )
        )}
      </div>
    </main>
  )
}

export default Details
