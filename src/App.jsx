
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePageRoutes/HomePage';
import Footer from './components/Footer/Footer';
import ShopRoutes from './routes/ShopRoutes/ShopRoutes';



import Login from './pages/register/Login';
import Register from './pages/register/Register';
import Home from './Home';




export default function App() {
  return (
    < >

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>

    </>
  )
}