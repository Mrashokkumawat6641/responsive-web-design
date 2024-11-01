import React from 'react'

import LightButton from "../../public/assets/website/light-mode-button.png";
import DarkButton from "../../public/assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );
    const element = document.documentElement; // html element

    React.useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');

        }
        else {
            element.classList.remove('dark');
            localStorage.setItem('theme', "light");
        }


    },[theme]);
    return (
        <div className='relative py-2'>

            <img
                src={LightButton}
                alt=""
                onClick={() => setTheme( theme === 'light' ? 'dark' : 'light')}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300    absolute right-0 z-10  ${theme === "dark" ? "opacity-10" : "opacity-100"}`}
            />
            <img src={DarkButton} alt=""
                onClick={() => setTheme( theme ==='light' ? 'dark' : 'light')}
                className={'w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 px-9'}
            />

        </div>
    );
};
export default DarkMode;

