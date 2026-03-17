import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import PageReveal from './components/PageReviel'
import Works from './pages/works'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PageReveal />
        <Navbar />
        <Home />
        <About />
        <Works />
        <Services />
        <Contact />

      </div>
    </>
  )
}

export default App
