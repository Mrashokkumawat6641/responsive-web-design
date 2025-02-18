// import React from 'react';

import Img1 from "/assets/Women/freepik__upload__88337.jpeg"
// import Img1 from ""
import Img2 from "/assets/Women/freepik__upload__13854.jpeg"
import Img3 from "/assets/Women/freepik__upload__88337.jpeg"
import Img4 from "/assets/Women/freepik__upload__13854.jpeg"
// import Img5 from "../../public/assets/Women/freepik__upload__88337.jpeg"
import { FaStar } from "react-icons/fa6"


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: "5.0",
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: "4.5",
        color: "Black",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: "4.7",
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: "4.4",
        color: "Yellow",
        aosDelay: "600",
    },
]

const Products = () => {
    return <div className='mt-14 mb-12 dark:bg-gray-900 dark:text-cyan-50 '>
        <div className='container'>
            {/* Header Section */}
            <div className=' text-center mb-10 max-w-[600px] mx-auto'>
                <p 
                data-aos="fade-up"
                className=' text-orange-500 text-2xl'>Top Rated Products</p>
                <h1 
                data-aos="fade-up"
                className='text-3xl font-bold'>Best Products</h1>
                <p 
                data-aos="fade-up"
                className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, architecto.</p>
            </div>
            {/* Body Section */}
            <div>
                <div className='grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 flex items-center'>
                    {/* Card Section */}
                    {
                        ProductsData.map((data) => (


                           <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='space-y-3'
                            >
                                <img src={data.img} alt=""
                                    className='h-[220] w-[150] object-cover rounded-md'
                                />
                                <div>
                                    <h3 className=' font-semibold'>{data.color}</h3>
                                    <p 
                                  
                                    className='text-sm text-gray-600 '> {data.color}</p>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' ></FaStar>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }



                </div>
                {/* view all button */}
                <div className='flex justify-center'
                data-aos="fade-up"
                >
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All Button</button>
                </div>
            </div>
        </div>
    </div>

}

export default Products