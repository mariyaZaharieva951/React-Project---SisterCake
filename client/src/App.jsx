// import { useState } from 'react'
import { OurClients } from './components/Clients/OurClients'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Products } from './components/Products/Products'
import { Offer } from './components/Shop/Offer'
import { Welcome } from './components/Welcome/Welcome'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Welcome/>
        <Products/>
        <Offer/>
        <OurClients/>
      </main>
      <Footer />
    </>
  )
}

export default App
