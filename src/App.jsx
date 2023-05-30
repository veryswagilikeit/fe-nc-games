import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Reviews } from './components/Reviews'
import { Header } from './components/Header'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Reviews />} />
      </Routes>
    </>
  )
}

export default App
