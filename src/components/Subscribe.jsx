import React from 'react'
// import Banner from './Banner'
import Banner from '../../public/assets/Subscribe/AdobeStock_28.jpg'

const BannerImg = {
    backgroundImage:  `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}


const Subscribe = () => {
  return (
    <div
    data-aos="zoom-in"
    className='mb-20 bg-orange-300 dark:bg-gray-800 text-white'
    style={BannerImg}
    >
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 
                className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>
                Get Notified About New Products</h1>
                <input 
                data-aos="fade-up"
                type="text"
                placeholder='Enter Your Email' 
                className='w-full p-3 text-black'
                required
                />
                
            </div>
        </div>

    </div>
  )
}

export default Subscribe