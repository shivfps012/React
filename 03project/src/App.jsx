import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let obj={
  username:"shiv",
  age:20
}
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <Card username="chai and shiv"  />
     <Card username="lets learn react"  />
    </>
  )
}

export default App
