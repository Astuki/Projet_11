import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import User from './pages/User'
import Home from './pages/Home'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
  )
}

export default App
