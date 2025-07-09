import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className=' bg-white text-black dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5'>
        <div className='section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8'>
            {/* logo */}
            <div className=' md:col-span-2'>
                <h2 className='text-2xl font-bold mb-4'><Link to="/">Panto</Link></h2>
                <p className='md:mr-12'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            </div>
            <div>
                {/* services */}
                <h2 className=' text-xl font-semibold mb-4'>Services</h2>
                <ul className='space-y-2'>
                    <li>
                        <Link className='hover:bg-primary' to="/">Email Marketing</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-primary' to="/">Companies</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-primary' to="/">Branding</Link>
                    </li>
                </ul>
            </div>
            <div>
                {/* services */}
                <h2 className=' text-xl font-semibold mb-4'>Furniture</h2>
                <ul className='space-y-2'>
                    <li>
                        <Link className='hover:bg-primary' to="/">Beds</Link>
                        
                    </li>
                    <li>
                        
                        <Link className='hover:bg-primary' to="/">Chair</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-primary' to="/">All</Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                {/* services */}
                <h2 className=' text-xl font-semibold mb-4'>Follow Us</h2>
                <ul className=''>
                    <li>
                        <Link className='hover:bg-primary flex items-center space-x-2' to="/"><FaFacebookF/> <span>Facebook</span></Link>
                        
                        
                    </li>
                    <li>
                        <Link className='hover:bg-primary flex items-center space-x-2' to="/"><FaTwitter/> <span>Twitter</span></Link>
                    </li>
                    <li>
                        <Link className='hover:bg-primary flex items-center space-x-2' to="/"><FaInstagram/> <span>Instagram</span></Link>
                    </li>
                </ul>
            </div>

        </div>

        {/* footer copyright */}
        <div className=' mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4'>
            <p>Copyright &copy; {new Date().getFullYear()} </p>

            <div className=' flex items-center gap-4'>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer