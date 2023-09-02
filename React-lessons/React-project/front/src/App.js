//import logo from './logo.svg';
// import './App.css';


import { Route, Routes } from "react-router-dom";

// import Home from './Pages/Home'
import Home from './Pages/Home.jsx'
import Prices from './Pages/Prices.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import ContactUs from './Pages/ContactUs.jsx'


import Header from './components/common/Header/Header.jsx'
import Footer from './components/common/Footer/Footer.jsx'
import Hero from "./components/Hero/Hero.jsx";


import './assets/sass/main.scss'

import { shopItems } from './data/shopItems.js'
let currentItems = [...shopItems];

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
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
