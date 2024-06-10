import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Details } from './pages'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/marvel-spa/" element={<Home />} />
        <Route path="/marvel-spa/character/:id" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
