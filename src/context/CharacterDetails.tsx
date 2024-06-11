import React, { createContext, useState, useRef } from 'react'
import { CharacterProps, CharactersProviderProps } from '@/types/'
import { getCharacterById } from '@/api/'

interface CharacterDetailsContextProps {
  character: CharacterProps | null
  setCharacter: React.Dispatch<React.SetStateAction<CharacterProps | null>>
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
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchCharacterDetails = async (id: string) => {
    if (abortControllerRef.current) abortControllerRef.current.abort()

    setLoading(true)

    const abortController = new AbortController()
    abortControllerRef.current = abortController
    try {
      const data = await getCharacterById(id, abortController.signal)
      setCharacter(data)
    } catch (err) {
      setError('Failed to fetch character details')
    } finally {
      setLoading(false)
    }
  }

  return (
    <CharacterDetailsContext.Provider
      value={{ character, setCharacter, fetchCharacterDetails, loading, error }}
    >
      {children}
    </CharacterDetailsContext.Provider>
  )
}
