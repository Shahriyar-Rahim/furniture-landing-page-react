import aboutbanner from '../assets/about-background.jpg'
import Expenses from './HomesPages/Expenses'

const About = () => {
  return (
    <section>
      {/* banner */}
      <div style={{backgroundImage: `url(${aboutbanner})`}}
      className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white'
      >
       <div>
        <h1 className='text-5xl font-bold underline underline-offset-4 '>About Us</h1>
        </div> 
      </div>

      <Expenses />
    </section>
  )
}

export default About