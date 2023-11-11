// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    	<Header />
      
      <main>
    	<Routes>
			<Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>


    	</Routes>
      </main>
      
      <Footer />
    </>
  )
}

export default App
