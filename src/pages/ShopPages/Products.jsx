import { useState } from "react"
import { products } from "../../utils/products"
import buttonarrow from '../../assets/button-icon.png'
import ProductCard from "./ProductCard"

const Products = ({ headline }) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const [visibleP, setVisibleP] = useState(4);
    const filteredProducts = products.filter((product) => product.category === selectedCategory)

    const loadMoreP = () => {
        setVisibleP((prev) => prev + 4);
    }

    return (
        <div>
            <div className='section-container'>
                <h2 className=' text-4xl font-bold text-center mt-8'>{headline}</h2>

                {/* category */}
                <div className=' bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                    <div className=' flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                            categories.map((category) => (
                                <button
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setVisibleP(4)
                                    }}
                                    className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors
                            ${selectedCategory === category ? 'bg-white text-primary' : 'text-secondary'}`}
                                    key={category}>{category}</button>
                            ))
                        }
                    </div>
                </div>

                {/* product grid */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        // products.map((p, i) => (
                        //     <ProductCard key={i} product={p}/>
                        // ))
                        filteredProducts.slice(0, visibleP).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>

                {/* load more button */}
                {
                    visibleP < filteredProducts.length && (
                        <div className=" flex justify-center items-center mt-8">
                            <button 
                            onClick={loadMoreP}
                            className=' text-base font-semibold text-primary flex items-center gap-1 cursor-pointer'>
                                View All
                                <img src={buttonarrow} alt="arrow" />
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products