import { FC } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { CharacterDetailsProvider, CharactersProvider } from '@/context'
import { Home, Details } from '@/pages'

const App: FC = () => {
  return (
    <CharactersProvider>
      <CharacterDetailsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroi/:id" element={<Details />} />
          </Routes>
          <footer />
        </Router>
      </CharacterDetailsProvider>
    </CharactersProvider>
  )
}

export default App
