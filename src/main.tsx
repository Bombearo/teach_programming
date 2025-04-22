import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import Sequencing from './pages/Sequencing/Sequencing.tsx'
import Databases from './pages/Databases/Databases.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <nav>
      <div className='nav-item'><a href="/">Home</a></div>
      <div className="nav-item"><a href="/programming">Programming</a></div>
      <div className='nav-item'><a href="/databases">Databases</a></div>
    </nav>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Sequencing />} />
        <Route path="/databases" element={<Databases />} />
      </Routes>
    </BrowserRouter>
    <footer>
      Website created by <a href="https://www.jadenshek.com" target='_blank'>Jaden Shek</a>
    
    </footer>
  </StrictMode>
)
