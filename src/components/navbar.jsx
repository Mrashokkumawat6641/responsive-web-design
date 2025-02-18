import { IoMdSearch } from "react-icons/io";
import { FaUserPlus, FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useAuthStore } from "../store/UseAuthStore";

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "https://example.com/top-rated" },
    { id: 3, name: "Kids Wear", link: "https://example.com/kids-wear" },
    { id: 4, name: "Mens Wear", link: "https://example.com/mens-wear" },
    { id: 5, name: "Electronics", link: "https://example.com/electronics" },
];

const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "https://example.com/trending" },
    { id: 2, name: "Best Selling", link: "https://example.com/best-selling" },
    { id: 3, name: "Top Rated", link: "https://example.com/top-rated" },
];

const handleOrderPopup = () => {
    console.log("Order popup clicked");
};

const Navbar = () => {
    const authUser = useAuthStore((state) => state.authUser);

    return (
        <div>
            {/* Upper Navbar */}
            <div className="shadow-md bg-orange-200 dark:text-white duration-200 relative z-40 cursor-pointer">
                <div className="flex py-2">
                    <div className="container flex justify-between items-center">
                        <Link to="/">
                            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-1">
                                <img className="w-10" src="/assets/Logo.png" alt="Logo" />
                                Shopsy
                            </a>
                        </Link>
                    </div>
                    {/* Search Bar */}
                    <div className="bg-white px-2 border rounded-full flex justify-between items-center gap-4 mx-40 dark:bg-orange-300">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[100px] sm:w-[200px] transition-all rounded-full border-gray-300 px-10 py-1 focus:outline-none dark:bg-orange-300 dark:border-gray-500 mx-40"
                        />
                        <IoMdSearch className="text-gray-800 dark:text-white" />
                    </div>

                    {/* If user is logged in, display welcome message; else show Signup and Login buttons */}
                    {authUser ? (
                        <div className="mx-5 text-white font-medium">
                            Welcome, {authUser.fullName}
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-9 rounded-full flex items-center gap-3 mx-5">
                                    <span className="group-hover:block hidden">Login</span>
                                    <FaSignInAlt className="text-xl" />
                                </button>
                            </Link>
                            <Link to="/registeruser">
                                <button className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-9 rounded-full flex items-center gap-3 mx-5">
                                    <span className="group-hover:block hidden">Signup</span>
                                    <FaUserPlus className="text-xl" />
                                </button>
                            </Link>

                            <Link to="/OrderScreen">

                                <button
                                    onClick={handleOrderPopup}
                                    className="group bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-9 rounded-full flex items-center gap-3 mx-5"
                                >
                                    <span className="group-hover:block hidden">Order</span>
                                    <FaCartShopping className="text-xl" />
                                </button>
                            </Link>
                        </>
                    )}
                    {/* Dark Mode Switch */}
                    <DarkMode />
                </div>
            </div>

            {/* Lower Navbar */}
            <div className="flex justify-center py-2 text-gray-700 border-b-4 dark:border-gray-400 dark:bg-gray-900 dark:text-white">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className="px-4 hover:text-primary duration-200">
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-1 py-2">
                            Trending Products
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                        </a>
                        <div className="absolute z-50 hidden group-hover:block w-[150px] rounded-md bg-white p-2 shadow-md dark:bg-gray-900">
                            <ul>
                                {DropdownLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.link} className="block rounded-md p-2 hover:bg-primary/20 dark:text-white">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
