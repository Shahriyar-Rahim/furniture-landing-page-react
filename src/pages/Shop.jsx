import banner from '../assets/banner.png'
import Products from './ShopPages/products'

const Shop = () => {
  return (
    <section className=' h-screen'>
      {/* banner */}
      <div className=' w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white'
      style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className=' text-4xl font-bold'>Shop our Products</h1>
      </div>

      {/* products */}
      <Products headline="What's Your Choice"/>
    </section>
  )
}

export default Shop