import { useState } from 'react'
import './App.scss'
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
