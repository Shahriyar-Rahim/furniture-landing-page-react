import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Shop from './pages/Shop.jsx';
import 'sweetalert2/dist/sweetalert2.min.css'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Routes>
      <Route element={ <App/> }>
        <Route path="/" element={<Home />} />
        <Route path='/furniture' element={<div>Furniture</div>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
)
