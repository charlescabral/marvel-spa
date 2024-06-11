import { ReactNode } from 'react'

export interface FlexProps {
  direction?: 'row' | 'column'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  children?: React.ReactNode
}

export interface GridProps {
  columns?: number
  gap?: string
  children?: React.ReactNode
}

export interface FavoriteProps {
  id: number
}

export interface SvgProps {
  size?: number
  color?: string
}

export interface CharactersProviderProps {
  children: ReactNode
}

export interface State {
  params: GetCharactersParams
  characters: CharacterProps[]
  filteredCharacters: CharacterProps[]
  count: number
  loading: boolean
  error: string | null
  favorites: number[]
}
export interface CharactersContextProps extends State {
  fetchCharacters: (params?: GetCharactersParams) => Promise<void>
  toggleFavorite: (id: number) => void
  filterFavorites: () => void
}

export type Action =
  | { type: 'FETCH_START' }
  | {
      type: 'FETCH_SUCCESS'
      payload: { results: CharacterProps[]; count: number }
    }
  | { type: 'FETCH_FAILURE'; error: string }
  | { type: 'UPDATE_PARAMS'; payload: GetCharactersParams }
  | { type: 'TOGGLE_FAVORITE'; payload: { id: number } }
  | { type: 'FILTER_FAVORITES' }

export interface RatingProps {
  value: number
  max: number
  icon: string
  size?: number
  color?: string
}

export interface SearchProps {
  onEnter: (params: GetCharactersParams) => void
  placeholder?: string
  variation?: string
}

export interface ImageProps {
  src: string
  alt: string
}

export interface ToggleProps {
  onChange: (params: GetCharactersParams) => void
  order?: string
}

export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  className?: string
  children: React.ReactNode
}

export interface GetCharactersParams {
  nameStartsWith?: string | null
  orderBy?: string
  limit?: number
  offset?: number
}

export interface CharacterResourceProps {
  resourceURI: string
  name: string
  type?: string
}

export interface CharacterProps {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  comics: {
    available: number
    collectionURI: string
    items: CharacterResourceProps[]
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: CharacterResourceProps[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: CharacterResourceProps[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: CharacterResourceProps[]
    returned: number
  }
  urls: { type: string; url: string }[]
}

export interface ListProps {
  characters: CharacterProps[]
}

export interface CardProps {
  key: number
  character: CharacterProps
}

export interface CharacterResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: CharacterProps[]
    etag: string
  }
}

export interface InfosProps {
  title: string
  description: string
  items: { label: string; icon: string; value: string }[]
  rating: number
}

export interface ListItem {
  label: string
  icon: string
  value: string
}
