import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counts, setcounts] = useState(0);
  return (
    <>
    <h1>Counts: {counts}</h1>
    <button onClick={() => setcounts(counts + 1)}>counts</button>
    </>
  )
}

export default App
