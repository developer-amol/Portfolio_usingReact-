import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Home from './components/home'
import Progressbar from './components/progressbar'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Progressbar/>
    <Contact/>
    </>
  )
}

export default App
