import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "onkesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>Tailwind test</h1>
      <Card  username="sarvacoding" btnText="click me" />
      <Card username="soon" btnText="visit me" />
    </>
  )
}

export default App
