import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import LoginPage from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import AlquranPages from "./Pages/alQuran"
import Hijaiyah from "./Pages/hijayah"

function App() {
  const [sudah, setSudah] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          // element={sudah ? <Dashboard /> : <Navigate to="/login" />} 
          element={<Dashboard />} 
        />
        <Route 
          path="/login" 
          element={<LoginPage setSudah={setSudah} />} 
        />
        <Route 
          path="/Alquran" 
          element={<AlquranPages/>} 
        />
        <Route 
          path="/Hijayah" 
          element={<Hijaiyah/>} 
        />
      </Routes>
    </Router>
  )
}

export default App