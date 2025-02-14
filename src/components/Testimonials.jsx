// import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id: 1,
        name: "Arjun Deshwal",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem minus omnis sequi tenetur. Soluta, corrupti.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SUxMakAg4NBp_m_eHrd_8tFcRw1l66XpPg&s",
    },
    {
        id: 2,
        name: "Pardeep Narwal",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem minus omnis sequi tenetur. Soluta, corrupti.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz03Cl4u6ki4qrFsbU0Wll8lVB9WSzWXOv0w&s",
    },
    {
        id: 3,
        name: "Pawan Sheraawat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem minus omnis sequi tenetur. Soluta, corrupti.",
        img:"https://ss-i.thgim.com/public/incoming/j540p3/article68529131.ece/alternates/LANDSCAPE_1200/WhatsApp%20Image%202024-08-15%20at%2018.18.30.jpeg",
        // img:"https://www.pexels.com/photo/plant-with-green-leaves-16631163",
    },
    {
        id: 2,
        name: "vikash Candola",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem minus omnis sequi tenetur. Soluta, corrupti.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtelJL5r77g5bbbVOYdqy3x5WORD-1kHwlQ&s",
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
        Responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinte: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow :2,
                    slidesToScroll:1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow :1,
                    slidesToScroll:1,
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