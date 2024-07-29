import './App.css'
import Home from './pages/Home'
import Cjogar from './pages/Cjogar';
import Regras from './pages/Regras';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cjogar' element={<Cjogar />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Regras' element={<Regras />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
