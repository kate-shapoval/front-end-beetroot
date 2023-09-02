import { Route, Routes } from "react-router-dom";

import Home from './Pages/Home.jsx'
import Prices from './Pages/Prices.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import ContactUs from './Pages/ContactUs.jsx'


import Header from './components/common/Header/Header.jsx'
import Footer from './components/common/Footer/Footer.jsx'

import './assets/sass/main.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
