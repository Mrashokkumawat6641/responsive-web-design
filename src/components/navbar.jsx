
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping } from "react-icons/fa6";
import {FaCaretDown} from "react-icons/fa";
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "https://www.shauryasanadhya.com/blogs/news/clothing-brands-for-women-in-india#:~:text=Label%20Shaurya%20Sanadhya%2C%20H%26M%2C%20Zara,stylish%20and%20high%2Dquality%20apparel.",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "https://mackly.com/blogs/news/top-10-kids-clothing-brands-in-india?srsltid=AfmBOoqENCorsdZVzGnauaoJ7WGzHd60-eKgE-7qBO64XptGW1Yn_7pg",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "https://www.indianterrain.com/?srsltid=AfmBOopjppHfR05Bc_FdYOnumViDYESrZEFJKeg_16aXhB6qvKiP1abm",
    },
    {
        id: 5,
        name: "Electronics",
        link: "https://housing.com/news/electronics-companies-in-india/",
    },

];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "https://qikink.com/blog/high-demand-products-to-sell-in-india/",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "https://www.bhg.com/home-improvement/electrical/best-ceiling-fans/",

    },
    {
        id: 3,
        name: "Top Rated",
        link: "https://brandirectory.com/rankings/apparel/table",
    },
];
const Navbar = () => {
    return <div>
        {/* { upper Navbar} */}
        <div className='shadow-md bg-orange-200 dark:text-white duration-200 relative z-40 cursor-pointer focus:border-primary dark:border-b-gray-500 dark:bg-orange-500'>
            <div className='flex py-2 '>
                <div className='container flex justify-between items-center  '>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img className='w-10 ' src='/assets/Logo.png' alt="Logo" />
                        Shopsy
                    </a>
                </div>
                {/* Search bar and order button */}
                <div className='bg-white px-2 border rounded-full flex justify-between items-center gap-4 focus:border-primary dark:border-gray-500 dark:bg-gray-800 '>
                    {/* <div className=' group hidden sm:block relative  bg-white'></div> */}
                    <input
                        type="text"
                        placeholder='Search'
                        className='w-[200px]  sm:w-[200px] group-hover:w-[300px]  transition-all duration-300 rounded-full  border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800
                        
                        ' />
                    <IoMdSearch
                        className='text-gray-800 group-hover:text-primary  top-translate-y-1/2 right-3 dark:text-white '
                    />
                </div>
                <button onClick={() => handleOrderPopup()}
                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-9 rounded-full flex items-center gap-3 group mx-5 dark:text-white'>

                    <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                    <FaCartShopping
                        className='text-xl text-white drop-shadow-sm cursor-pointer dark:text-white'
                    />
                    
                </button>
                {/* Darkmode Switch */}
                      <div>
                    <DarkMode />
                </div>
                
            </div>
           
            {/* Order Button */}

        </div>
        {/* { lower Navbar} */}
        <div className='flex justify-center py-2 text-gray-700 border-b-4 focus:border-primary dark:border-gray-100 dark:bg-gray-900 dark:text-white dark:border-b-gray-400'>
            <ul className='sm:flex hidden items-center gap-4'>
                {
                    Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link}
                            className='inline-block px-4 hover:text-primary duration-200'
                            >{data.name}</a>
                        </li>

                    ))}
                    { /* Simple Dropdown and Links */ }
                    <li className='group relative cursor-pointer'>
                        <a href="#"
                        className='flex items-center gap-[2px] py-2'
                        >
                            Trending Products
                            <span>
                                <FaCaretDown
                                className='transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md dark:text-white dark:bg-gray-900'>
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id} >
                                        <a href={data.link}
                                        className='inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:text-white
                                        dark:bg-slate-900 bg-transparent'
                                        >

                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>

            </ul>

        </div>
    </div>
}

export default Navbar