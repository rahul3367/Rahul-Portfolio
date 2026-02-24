import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import PageReveal from './components/PageReviel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PageReveal/> 
        <Navbar />
        <Home/>
        <Services/>
      </div>
    </>
  )
}

export default App
