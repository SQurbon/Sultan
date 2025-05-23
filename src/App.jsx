
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './routes/HomePageRoutes/HomePage';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  
      </Routes>
      <Footer/>

    </>
  )
}