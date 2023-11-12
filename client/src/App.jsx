// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { OurClients } from './components/Clients/OurClients';
import { Menu } from './components/Products/Menu/Menu';
import { Gallery } from './components/Products/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
      
      <main>
        <Routes>
			<Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Welcome/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/comments' element={<OurClients/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>




        </Routes>
      </main>
      
      <Footer />
    </>
  )
}

export default App
