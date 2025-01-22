import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';
import About from './Components/Navbar/About';
import Fotter from './Components/Footer/Fotter';
import Pricing from './Components/Navbar/Pricing';

import Blog from './Components/Navbar/Blog';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
      <Fotter/>
    </div>
  )
}

export default App