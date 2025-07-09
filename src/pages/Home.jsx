import React from 'react'
import Hero from './HomesPages/Hero'
import WhyChoose from './HomesPages/WhyChoose'
import Products from './ShopPages/products'
import Expenses from './HomesPages/Expenses'
import Materials from './HomesPages/Materials'
import Testimonials from './HomesPages/Testimonials'

const Home = () => {
  return (
    <>
    <Hero />
    <WhyChoose />
    <Products headline="Best Selling Products"/>
    <Expenses />
    <Materials />
    <Testimonials />
    </>
  )
}

export default Home