import React, { useContext, useEffect, useState } from 'react'
import { FaBars, FaShoppingBag, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
import { CartContext } from '../context/CartContext';

const navigationas = [
    {
        path: "/",
        label: "Furniture"
    },
    {
        path: "/shop",
        label: "Shop"
    },
    {
        path: "/about",
        label: "About Us"
    },
    {
        path: "/contact",
        label: "Contact"
    },
]




const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // cart items from context
    const {cartCount} = useContext(CartContext);
    
    // when scroll happens apply bg color to navbar
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])


    const handleToggle = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md dark:text-black" : "bg-transparent text-white"}`}>
            <nav className='container max-w-7xl mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo */}
                <Link to="/" className=' font-bold'>Panto</Link>

                {/* hamburger menu */}
                <div
                    onClick={handleToggle}
                    className='md:hidden text-xl cursor-pointer hover:text-primary'>
                    {
                        isMenuOpen ? null : <FaBars />
                    }
                </div>

                {/* desktop menu items */}
                <div className=' hidden md:block'>
                    <ul className=' flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
                        {
                            navigationas.map((item, index) => (
                                <li key={index} >
                                    <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primary font-bold"
                                            : "hover:text-primary"
                                    }
                                    to={item.path}>{item.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* mobile menu items */}
                <div className={`fixed top-0 left-0 right-0 h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-0' : '-translate-x-full'} md:hidden`}>
                    <div className=' absolute top-4 right-5 text-xl cursor-pointer' onClick={handleToggle}>
                        <FaTimes />
                    </div>
                    <ul className=' flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
                        {
                            navigationas.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-primary font-bold"
                                                : "hover:text-primary"
                                        }
                                        to={item.path}>{item.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* cart icon */}
                <div className=' hidden md:block cursor-pointer relative'>
                    <FaShoppingBag className=' text-xl' />
                    <sup className=' absolute -top-2 -right-4 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                        {cartCount}
                    </sup>
                </div>
            </nav>
        </header>
    )
}

export default NavBar