/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useReducer,
  useRef,
  useEffect,
  useContext
} from 'react'
import {
  CharactersContextProps,
  CharactersProviderProps,
  GetCharactersParams,
  State,
  Action
} from '@/types/'
import { getCharacters } from '@/api'

export const CharactersContext = createContext<
  CharactersContextProps | undefined
>(undefined)

const initialState: State = {
  characters: [],
  filteredCharacters: [],
  count: 0,
  loading: false,
  error: null,
  params: { limit: 20, offset: 0 },
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        characters: action.payload.results,
        count: action.payload.count,
        loading: false,
        error: null
      }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.error }
    case 'UPDATE_PARAMS':
      return {
        ...state,
        params: { ...state.params, ...action.payload }
      }
    case 'TOGGLE_FAVORITE': {
      const { id } = action.payload
      const favorites = state.favorites.includes(id)
        ? state.favorites.filter((fav: number) => fav !== id)
        : [...state.favorites, id]

      localStorage.setItem('favorites', JSON.stringify(favorites))

      return {
        ...state,
        favorites
      }
    }
    case 'FILTER_FAVORITES': {
      const filteredCharacters = state.characters.filter((character) =>
        state.favorites.includes(character.id)
      )
      return {
        ...state,
        filteredCharacters
      }
    }
    default:
      return state
  }
}

export const CharactersProvider: React.FC<CharactersProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const abortControllerRef = useRef<AbortController | null>(null)
  const [initialFetchDone, setInitialFetchDone] = React.useState(false)

  useEffect(() => {
    const fetchInitialCharacters = async () => {
      if (!initialFetchDone) {
        await fetchCharacters()
        setInitialFetchDone(true)
      }
    }

    fetchInitialCharacters()

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort()
    }
  }, [])

  const fetchCharacters = async (
    params: GetCharactersParams = { limit: 20, offset: 0 }
  ) => {
    if (abortControllerRef.current) abortControllerRef.current.abort()

    const abortController = new AbortController()
    abortControllerRef.current = abortController

    dispatch({ type: 'FETCH_START' })
    try {
      const { results, count } = await getCharacters(
        params,
        abortController.signal
      )
      dispatch({ type: 'UPDATE_PARAMS', payload: params })
      dispatch({ type: 'FETCH_SUCCESS', payload: { results, count } })
    } catch (err) {
      dispatch({ type: 'FETCH_FAILURE', error: 'Failed to fetch characters' })
    } finally {
      abortControllerRef.current = null
    }
  }

  const toggleFavorite = (id: number) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { id } })
  }

  const filterFavorites = () => {
    dispatch({ type: 'FILTER_FAVORITES' })
  }

  return (
    <CharactersContext.Provider
      value={{
        ...state,
        fetchCharacters,
        toggleFavorite,
        filterFavorites
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharacters = () => {
  const context = useContext(CharactersContext)
  if (!context) {
    throw new Error('useCharacters must be used within a CharactersProvider')
  }
  return context
}
