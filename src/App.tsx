import { FC } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, Details } from '@/pages'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
