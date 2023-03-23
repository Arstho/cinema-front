import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage/HomePage'
import { OnePage } from './pages/OnePage/OnePage'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/onepage' element={<OnePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
