import React, { useContext } from 'react'
import banner from '../../assets/banner.png'
import { FaSearch } from 'react-icons/fa'
import ToolTip from '../../components/ToolTip'
import { BsMoon, BsSun } from 'react-icons/bs'
import { ThemeContext } from '../../context/ThemeContext'

const Hero = () => {
    const {isdarkMide, toggleTheme} = useContext(ThemeContext);
    console.log(isdarkMide)

    return (
        <section
            style={{ backgroundImage: `url(${banner})` }}
            className=' h-screen relative bg-cover bg-center text-white'>
            <div className='md:pt-25 px-2 pt-18 text-center space-y-6 md:w-1/2 mx-auto'>
                <h1 className=' text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug '>Make your interior more
                    minimalistic & modern</h1>
                <p className=' text-lg font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* search field */}
                <div className='relative inline-block z-30'>
                    <input type="text" placeholder='search furniture' className=' w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none placeholder:text-white' />
                    <div className=' absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-primary rounded-full cursor-pointer text-center'>
                        <FaSearch />
                    </div>
                </div>
            </div>

            {/* bottom blur effect */}

            <div className=' absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm' />

            {/* hover button for displaying tooltip box */}
            

            <div className='hidden lg:block absolute bottom-30 left-24 '>
                <ToolTip position="bottom"/>
            </div>
            <div className='hidden lg:block absolute bottom-36 left-76 '>
                <ToolTip position="bottom"/>
            </div>
            <div className='hidden lg:block absolute bottom-16 right-162 '>
                <ToolTip porition="bottom"/>
            </div>
            <div className='hidden lg:block absolute bottom-6 right-12 '>
                <ToolTip porition="bottom"/>
            </div>

            {/* dark and light mode switcher */}
            <div className=' absolute bottom-28 right-20 z-40'>
                <button
                onClick={toggleTheme}
                className=' focus:outline-none font-bold text-lg p-5 bg-black rounded-full'>
                    {
                        isdarkMide ? <BsSun className=' text-yellow-300' /> : <BsMoon className=' text-yellow-300' />
                    }
                </button>
            </div>
        </section>
    )
}

export default Hero