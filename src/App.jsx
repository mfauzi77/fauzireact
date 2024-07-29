import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
    <Banner />
    <Footer />
    
    </>
  )
}

export default App
