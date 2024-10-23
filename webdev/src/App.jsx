import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Services from "./services.jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
   
}

export default App