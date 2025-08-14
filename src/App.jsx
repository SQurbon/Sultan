
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePageRoutes/HomePage';
import Footer from './components/Footer/Footer';
import ShopRoutes from './routes/ShopRoutes/ShopRoutes';


import PaymentPage from './pages/payment/PaymentPage';
import Bag from '../src/pages/ShoppingBag/Bag';

import Delivery from './pages/delivery/Delivery';
import SelectDelivery from './pages/delivery/SelectDelivery';
import Contact from './pages/contact/Contact';
import Appfree from './pages/Discount/Appfree/Appfree';
import { CartIconProvider } from './components/Navbar/CartIconProvider';




export default function App() {
  return (
    < >
      <CartIconProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/:id" element={<ShopRoutes />} />
          <Route path="/bagg" element={<Bag />} />
          <Route path='/bag' element={<PaymentPage />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/selectdelivery' element={<SelectDelivery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/apfree' element={<Appfree />} />
        </Routes>
        <Footer />
      </CartIconProvider>

    </>
  )
}