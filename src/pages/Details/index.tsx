/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterDetailsContext } from '@/context'

const Details: FC = () => {
  const { id } = useParams()
  const context = useContext(CharacterDetailsContext)
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false)

  if (!context) {
    return <div>Heroi não encontrado</div>
  }

  console.log('teste')

  const { character, loading, error, fetchCharacterDetails } = context

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

  return (
    <div>
      <h1>Detalhes do Personagem</h1>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          character && (
            <div>
              <h2>{character.name}</h2>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <p>{character.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Details
