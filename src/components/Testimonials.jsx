// import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id: 1,
        name: "E Commerce",
        text: "the context of the provided image and search results likely refers to e-commerce theory. E-commerce theory encompasses the concepts and frameworks explaining how online buying and selling, and fund or data transmission occur over electronic networks, primarily the internet. It explores the use of information technology to boost sales, improve business efficiency, and create new products and service.",
        img: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
    },
    {
        id: 2,
        name: "Online Shopping",
        text: "E-commerce, or electronic commerce, refers to the buying and selling of goods or services over the internet. It encompasses a wide range of online business activities and transactions conducted through computer-mediated networks. E-commerce has become increasingly popular due to its convenience and accessibility. .",
        img: "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    },
    {
        id: 3,
        name: "ET Retail",
        text: "Thory may be a misspelling oftheory or it could be referring to e- commerce platforms.Considering the image, its likely related to e - commerce platforms, specifically WooCommerce.WooCommerce is a customizable, open - source e - commerce platform builtas a plugin for WordPress.It allows users to build and manage online stores with various features and functionalities.While it offers flexibility and control, it may require more technical knowledge compared to platforms like Shopify.",
        img: "https://etimg.etb2bimg.com/photo/112989162.cms",
    },
    {
        id: 2,
        name: "The Future Of E-Commerce",
        text: "The image shows three small cardboard boxes with shopping cart icons on a laptop keyboard, suggesting the concept of e-commerce. Shopify is a popular e-commerce platform that is used by approximately 30% of websites using e-commerce technologies in the U.S. as of January 2025.It can be a lucrative platform for creating an online business, particularly in fashion, clothing, or accessories. However, it's important to note that some sources estimate that the success rate for Shopify stores is between 5% and 10%, indicating that a large percentage of stores may not succeed",
        img: "https://imageio.forbes.com/specials-images/imageserve/5d95d03767dd830006a295b6/GETTY/960x0.jpg?format=jpg&width=960",
    },
]
const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "Linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        Responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinte: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='py-10 mb-10 dark:bg-gray-900 dark:text-white'>
            <div className='container dark:text-white'>
                {/* Header Section */}

                <div className=' text-center mb-10 max-w-[600px] mx-auto'>
                    <p
                        data-aos="fade-up"
                        className='text-sm text-orange-500'>
                        What our customers are saying
                    </p>
                    <h1
                        data-aos="fade-up"
                        className='text-3xl font-bold'>
                        Testimonials
                    </h1>
                    <p
                        data-aos="fade-up"
                        className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, architecto.</p>
                </div>
                {/* Testimonial Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className='my-6 dark:text-white'>
                                <div
                                    className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative dark:text-white'
                                >
                                    <div className='mb-4'>
                                        <img src={data.img} alt=""
                                            className='rounded-full w-20 h-20'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3 dark:text-white'>
                                            <p
                                                className='text-xs text-gray-500 dark:text-white'>
                                                {data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials