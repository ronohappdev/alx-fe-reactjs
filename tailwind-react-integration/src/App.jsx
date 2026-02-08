import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-red-500 text-4xl font-bold">
  If this is red, Tailwind works.
</h1>
    </>
  )
}

export default App
