import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Suggest from './pages/Suggest'



function App() {

  return <main>

    <Routes>

      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/suggestions" element={<Suggest />} />

    </Routes>


  </main>

}

export default App
