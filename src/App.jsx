
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePageRoutes/HomePage';
import Footer from './components/Footer/Footer';
import ShopRoutes from './routes/ShopRoutes/ShopRoutes';
import Bag from '../src/pages/ShoppingBag/Bag';
import Appfree from './pages/Discount/Appfree/Appfree';


export default function App() {
  return (
    < >
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/:id" element={<ShopRoutes />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/app" element={<Appfree />} />

          </Routes>

          <Footer />
    </>
  )
}