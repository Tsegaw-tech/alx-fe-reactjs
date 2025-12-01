import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"; // <-- import Tailwind CSS
import HomePage from "./components/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
