import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Reviews } from './components/Reviews'
import { Header } from './components/Header'
import { SingleReview } from './components/SingleReview'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Reviews />} />
        <Route path='/reviews/:review_id' element={<SingleReview />} />
      </Routes>
    </>
  )
}

export default App
