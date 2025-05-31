
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePageRoutes/HomePage';
import Footer from './components/Footer/Footer';
import ShopRoutes from './routes/ShopRoutes/ShopRoutes';
import { CartProvider } from './pages/Shop/CardContext';
import Bag from '../src/pages/ShoppingBag/Bag';
import { Card } from 'react-bootstrap';


export default function App() {
  return (
    < >
      <CartProvider> 
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/:id" element={<ShopRoutes />} />
            <Route path="/bag" element={<Bag />} />

          </Routes>

          <Footer />
        </BrowserRouter>
       
      </CartProvider>



    </>
  )
}