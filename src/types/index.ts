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
  size?: number
  className?: string
}

export interface SvgProps {
  className?: string
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
  value?: string
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
  lastComicDate: string
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

export interface ComicProps {
  id: number
  title: string
  description: string
  modified: string
  thumbnail: {
    path: string
    extension: string
  }
  resourceURI: string
  series: {
    resourceURI: string
    name: string
  }
  variants: { resourceURI: string; name: string }[]
  collections: { resourceURI: string; name: string }[]
  collectedIssues: { resourceURI: string; name: string }[]
  dates: { type: string; date: string }[]
  prices: { type: string; price: number }[]
  creators: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; role: string }[]
    returned: number
  }
  characters: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string }[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string; type: string }[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: { resourceURI: string; name: string }[]
    returned: number
  }
}

export interface ComicResponse {
  code: number
  status: string
  data: {
    results: ComicProps[]
    count: number
  }
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

export interface ListItem {
  label: string
  icon: string
  value: string
}
