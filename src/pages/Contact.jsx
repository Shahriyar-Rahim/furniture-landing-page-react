import bgcontact from '../assets/bg-contact.avif'
import Materials from './HomesPages/Materials'
import Testimonials from './HomesPages/Testimonials'

const Contact = () => {
  return (
    <section>
      {/* banner */}
      <div style={{ backgroundImage: `url(${bgcontact})` }}
        className='w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white'
      >
        <div>
          <h1 className='text-5xl font-bold underline underline-offset-4 '>Contact Us</h1>
        </div>
      </div>

      <Materials />
      <Testimonials />
    </section>
  )
}

export default Contact