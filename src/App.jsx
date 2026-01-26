import { Routes, Route } from 'react-router-dom'
import CarDetails from './components/CarDetails'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:carId" element={<CarDetails />} />
      </Routes>
    </>
  )
}

export default App
