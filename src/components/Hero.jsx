// import React from 'react'
import Image1 from "/assets/hero/ecom.png"
import Image2 from "/assets/hero/Mask_Group.png"
import Image3 from "/assets/hero/girlshopping.png"
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "upto 50% off on all Woman's Wear",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt non, cum eos dolor, aut quod in itaque odit neque pariatur tempora, consequuntur vel voluptas velit ducimus quaerat sit quidem!."
    },
    {
        id: 2,
        img: Image2,
        title: "Explore Summer Collection",
        description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
    },
    {
        id: 3,
        img: Image3,
        title: "upto 70% off on all Girls's Wear",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt non, cum eos dolor, aut quod in itaque odit neque pariatur tempora, consequuntur vel voluptas velit ducimus quaerat sit quidem!."
    },
]




const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200'>
            {/* Background Pattern */}
            <div className='h-[600px] w-[600px]  bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9] dark:bg-orange-500'>
            </div>
            {/* Hero  Section */}
            <div className='container pb-8 sm:pb-0'>
                {/* Hero Section */}
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* Text Content Section */}

                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration='500'
                                    data-aos-once="true"
                                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p 
                                    data-aos="fade-up"
                                    data-aos-duration='500'
                                    data-aos-delay="100"
                                    className='text-sm'>
                                        {data.description}
                                    </p>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-duration='500'
                                    data-aos-delay="300"
                                    >
                                        <button
                                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full '>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className='order-1 sm:order-2'>
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10'>
                                        <img src=
                                            {data.img} alt=""
                                            className='w-[300px] h-[300px] sm:h-[450] sm:w-[450px] sm:scale-125 object-contain mx-auto py-6 px-3 lg:scale-110   '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero;