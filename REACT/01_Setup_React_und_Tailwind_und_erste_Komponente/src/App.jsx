import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl text-center bg-purple-900 mb-5'>Test</h1>
      <Card name={'David'} jobtitle={'Arbeitslos'} description={'Taugenichts'}/>
      <Card name={'Raphael'} jobtitle={'Software Engineer'} description={'Indie Entwickler'}/>
    </>
  )
}

export default App
