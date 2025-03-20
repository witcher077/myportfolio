import { useState } from 'react';
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import {useTheme} from "../Context/themeContext"




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, Toggle } = useTheme();
    console.log(theme);
    
    const ToggleTheme=()=>{
        Toggle()
    }

    return (
        <div className='flex justify-between items-center  bg-gray-700 py-7 lg:px-4 px-3 z-50 sticky w-full top-0 left-0 '>
            <div>
                <h1 className='flex items-center justify-center lg:text-2xl text-sm font-bold text-green-800'><FaLessThan /><span className=' text-white'>Ashok Mahto</span><RxSlash /><FaGreaterThan /></h1>
            </div>
            <label className="switch">
                    <input onChange={()=>{ToggleTheme()}} type="checkbox" />
                    <span className="slider"></span>
            </label>
            <button className={`z-50  top-0 ${isOpen && "absolute"} right-0 cursor-pointer lg:hidden`} onClick={() => setIsOpen(!isOpen)}><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
            </svg></button>
           
            <div className={`lg:bg-transparent bg-blue-300  rounded-bl-md px-7 ${isOpen ? "absolute top-0 right-0 block" : "hidden"} lg:block  sm:min-w-60`}>
                <ul className='flex gap-7 lg:flex-row flex-col  my-5 lg:m-0'>
                    <li className="relative text-white text-xl group"><a href='#home'>Home</a><span className='absolute left-0 bottom-0 w-0 h-[4px] bg-amber-600 transition-all duration-300 group-hover:w-full'></span></li>
                    <li className='relative text-white text-xl group'><a href='#project'>project</a><span className='absolute left-0 bottom-0 w-0 h-[4px] bg-amber-600 transition-all duration-300 group-hover:w-full'></span></li>
                    <li className='relative text-white text-xl group'><a href='#experience'>Experience</a><span className='absolute left-0 bottom-0 w-0 h-[4px] bg-amber-600 transition-all duration-300 group-hover:w-full'></span></li>
                    <li className='relative text-white text-xl group'><a href='#about'>about</a><span className='absolute left-0 bottom-0 w-0 h-[4px] bg-amber-600 transition-all duration-300 group-hover:w-full'></span></li>
                    <li className='relative text-white text-xl group'><a href='#contact'>contact</a><span className='absolute left-0 bottom-0 w-0 h-[4px] bg-amber-600 transition-all duration-300 group-hover:w-full'></span></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header