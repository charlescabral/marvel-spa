import React, { createContext, useState, useRef } from 'react'
import { CharacterProps, CharactersProviderProps, ComicProps } from '@/types/'
import { getCharacterById, getComicsByCharacterId } from '@/api/'

interface CharacterDetailsContextProps {
  character: CharacterProps | null
  comics: ComicProps[] | null
  setCharacter: React.Dispatch<React.SetStateAction<CharacterProps | null>>
  setComics: React.Dispatch<React.SetStateAction<ComicProps[] | null>>
  fetchCharacterDetails: (id: string) => void
  loading: boolean
  error: string | null
}

export const CharacterDetailsContext = createContext<
  CharacterDetailsContextProps | undefined
>(undefined)

export const CharacterDetailsProvider: React.FC<CharactersProviderProps> = ({
  children
}) => {
  const [character, setCharacter] = useState<CharacterProps | null>(null)
  const [comics, setComics] = useState<ComicProps[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchCharacterDetails = async (id: string) => {
    if (abortControllerRef.current) abortControllerRef.current.abort()

    setLoading(true)

    const abortController = new AbortController()
    abortControllerRef.current = abortController
    try {
      const [characterData, comicsData] = await Promise.all([
        getCharacterById(id, abortController.signal),
        getComicsByCharacterId(id, abortController.signal)
      ])
      setCharacter(characterData)
      setComics(comicsData.results)
    } catch (err) {
      setError('Failed to fetch character details')
    } finally {
      setLoading(false)
    }
  }

  return (
    <CharacterDetailsContext.Provider
      value={{
        character,
        setCharacter,
        comics,
        setComics,
        fetchCharacterDetails,
        loading,
        error
      }}
    >
      {children}
    </CharacterDetailsContext.Provider>
  )
}
