import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toasts from './Pages/ToastPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Toasts />
    </div>
  )
}

export default App
