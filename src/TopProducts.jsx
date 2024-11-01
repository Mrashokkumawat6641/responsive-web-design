import React from 'react'
import Products from './components/Products'
import Img1 from '../public/assets/shirt/2.png'
import Img2 from '../public/assets/shirt/Group_66.png'
import Img3 from '../public/assets/shirt/Group_69.png'
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rerum vel veniam cum numquam.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rerum vel veniam cum numquam.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic rerum vel veniam cum numquam.",
    },
]

const TopProducts = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className='container dark:bg-gray-900/40'>
                {/* Header Section */}  
                <div className=' text-left mb-24 '>
                    <p
                        data-aos="fade-up"
                        className=' text-orange-500 text-2xl'>Top Selling Products</p>
                    <h1
                        data-aos="fade-up"
                        className='text-3xl font-bold'>Products</h1>
                    <p
                        data-aos="fade-up"
                        className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, architecto.</p>
                </div>
                {/* Body Section */}
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'
                >
                    {
                        ProductsData.map((data) => (
                            <div
                            data-aos='zoom-in'
                                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] '
                            >
                                {/* Image Section */}
                                <div className='h-[100px]'>
                                    <img
                                        className='max-w-[140px]  block mx-auto transform  -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
                                        src={data.img} alt="" />
                                </div>
                                {/* Details Section */}
                                <div className='p-4 text-center'>
                                    {/* Star Rating */}
                                    <div
                                        className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                                    // onClick={handleOrderPoup}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default TopProducts