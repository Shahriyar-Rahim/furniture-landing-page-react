import experiencesImg from '../../assets/expricences.png'
import Button from '../../components/Button'
import materialImg1 from '../../assets/material1.png'
import materialImg2 from '../../assets/material2.png'
import materialImg3 from '../../assets/material3.png'

const Materials = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20'>
            <div className='md:w-1/2 mx-auto'>
                <h3 className='text-primary text-lg font-semibold mb-4 uppercase'>Materials</h3>
                <h2 className='text-3xl capitalize font-bold mb-4 lg:w-1/2'>Very serious materials for making furniture</h2>
                <p className=' font-semibold text-secondary dark:text-white mb-5 lg:w-1/2'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button text="More info" />
            </div>

            <div className=' md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center mt-4 md:mt-0'>
                <div>
                    <img src={materialImg1} alt="first" />
                    <img src={materialImg2} alt="second" />
                </div>

                <div className=' md:col-span-2 col-span-1'>
                    <img src={materialImg3} alt="third" className=' md:h-[541px] w-full'/>
                </div>
            </div>
        </section>
    )
}

export default Materials