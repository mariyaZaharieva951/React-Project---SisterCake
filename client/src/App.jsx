// import { useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero/>
      </main>
      <Footer />
    </>
  )
}

export default App
