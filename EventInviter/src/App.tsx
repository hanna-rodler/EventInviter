import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Welcome to Event Inviter</h1>
        <p>Enjoy coding</p>
        <Button onClick={() => setCount((count) => count + 1)} variant="contained">
            Count is {count}
        </Button>
    </>
  )
}

export default App
