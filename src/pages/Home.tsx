import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import { Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = "Home";
  }
  , []);

  return (
    <>
    
      <div>
        <h1> Welcome!</h1>

        <p>This is a website for learning about different parts of programming! Glad you could make it!</p>

        We have a few sections to explore:
        <ul>
          <li><a href="/programming">Programming</a></li>
          <li><a href="/databases">Databases</a></li>
        </ul>
      </div>
    </>
  )
}

export default App
