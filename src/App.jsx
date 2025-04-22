import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/header'
import Footer from './Component/footer.jsx'
import Home from './Component/pages/Home.jsx'
import Overview from './Component/pages/Overview.jsx'
import DineIn from './Component/pages/DineIn.jsx';
import CartPage from './Component/pages/Cart.jsx';
import About from './Component/pages/About.jsx'
import Offers from './Component/pages/Offers.jsx';
export const cartContext = createContext();
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className='overflow-x-hidden scrollbar-hide'>
      <div className="relative min-h-screen w-screen">
        <Header />
        <main className="w-fit h-fit">
          <cartContext.Provider value={{ cartItems, setCartItems }}>
            <Routes>
              <Route path="/" element={<Overview />} />
              < Route path="/Home" element={< Home />} />
              < Route path="/Offers" element={< Offers />} />
              < Route path="/Dine" element={< DineIn />} />
              < Route path="/Cart" element={< CartPage />} />
              < Route path="/About" element={< About />} />
            </Routes >
          </cartContext.Provider >
        </main>
      </div>
    </div>
  )
}

export default App