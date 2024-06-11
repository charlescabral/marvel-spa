import { FC, useState } from 'react'
import { SearchIcon } from '@/components/'
import { SearchProps } from '@/types/'

const Search: FC<SearchProps> = ({
  onEnter,
  placeholder = 'Procure por Heróis',
  variation = 'default'
}) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onEnter({ nameStartsWith: query || null })
  }

  return (
    <div
      className={`search ${variation}`}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <SearchIcon />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search
