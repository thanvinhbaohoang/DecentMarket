import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-full flex flex-col items-center text-white bg-slate-950">
      <Navbar />
      <Hero />
      <Products />

      <div className="h-[100vh]"></div>
      <Footer />
    </div>
  )
}

export default App
