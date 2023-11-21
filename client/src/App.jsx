// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';
import { OurClients } from './components/Clients/OurClients/OurClients';
import { Menu } from './components/Products/Menu/Menu';
import { Gallery } from './components/Products/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { ForUs } from './components/ForUs/ForUs';
import { Details } from './components/Products/Details/Details';
import { Login } from './components/User/Login/Login';
import { Register } from './components/User/Register/Register';
import { AuthProvider } from './contexts/authContex';
import { Logout } from './components/User/Logout/Logout';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
        <Header />
      
      <main>
        <Routes>
			<Route path='/' element={<Home/>}/>
            <Route path='/about' element={<ForUs/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/comments' element={<OurClients/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/:cakeId' element={<Details/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/logout' element={<Logout/>}/>




        </Routes>
      </main>
      
      <Footer />
    </AuthProvider>
  )
}

export default App
