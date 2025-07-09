
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <NavBar />
          <main className=' min-h-screen'>
            <Outlet />
          </main>
          <Footer />
        </CartProvider>

      </ThemeProvider>

    </>
  )
}

export default App
