import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
// import { CartProvider } from './pages/Shop/CardContext.jsx'
import {CartProvider} from './pages/Shop/CardContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
  </BrowserRouter>
)
