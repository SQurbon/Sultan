import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePageRoutes/HomePage'
import ShopRoutes from './routes/ShopRoutes/ShopRoutes'
import Bag from './pages/ShoppingBag/Bag'
import PaymentPage from './pages/payment/PaymentPage'
import Delivery from './pages/delivery/Delivery'
import SelectDelivery from './pages/delivery/SelectDelivery'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <>
      
      <Navbar />

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/shop/:id" element={<ShopRoutes />} />
  <Route path="/bagg" element={<Bag />} />
  <Route path='/bag' element={<PaymentPage />} />
  <Route path='/delivery' element={<Delivery />} />
  <Route path='/selectdelivery' element={<SelectDelivery />} />
</Routes>

<Footer />
    </>
  )
}

export default Home
