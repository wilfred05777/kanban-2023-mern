import { useState } from 'react'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      Kanban app
    </div>
  )
}

export default App
