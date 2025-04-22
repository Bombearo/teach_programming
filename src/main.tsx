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
      <a href="/"><div className='nav-item'>Home</div></a>
      <a href="/programming"><div className="nav-item">Programming</div></a>
      <a href="/databases"><div className='nav-item'>Databases</div></a>
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
