import React from 'react'
import experiencesImg from '../../assets/expricences.png'
import Button from '../../components/Button'
const Expenses = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20'>
        <div className=' md:w-1/2 md:h-[541px]'>
            <img src={experiencesImg} alt="experience image" className='w-full h-full'/>
        </div>

        <div className='md:w-1/2 mx-auto'>
            <h3 className='text-primary text-lg font-semibold mb-4 uppercase'>experiences</h3>
            <h2 className='text-4xl capitalize font-bold mb-4 lg:w-1/2'>we provide you the Best experience</h2>
            <p className=' font-semibold text-secondary dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <Button text="More info"/>
        </div>
    </section>
  )
}

export default Expenses