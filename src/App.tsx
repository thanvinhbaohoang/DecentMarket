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
    <div className="flex flex-col items-center text-white bg-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
      <Products />
 

  

      <Footer />
    </div>
  )
}

export default App
