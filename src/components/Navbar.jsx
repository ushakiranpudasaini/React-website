import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaXmark,FaBars } from "react-icons/fa6";
const Navbar = () => {
    //  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

//set toggle Menu
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
}


    useEffect(() => { 
       const handleScroll = () => {
if(Window.scrollY > 100){
    setIsSticky(true);
}
else{
    setIsSticky(false);
}
       };
       window.addEventListener('scroll', handleScroll);

       return() => {
        window.addEventListener('scroll', handleScroll);
       }
    });

    //navitems array

    const navItems=[
        {link: "Home", path: "home"},
        {link: "Service", path: "home"},
        {link: "About", path: "home"},
        {link: "Testimonial", path: "home"},
        {link: "FAQ", path: "home"},  
    ];

    return (
        
        <header className="  w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
          
            <nav className={`max-w-6xl mx-auto p-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b  bg-white duration-300" : ""}`}>

            <div className="flex justify-between items-center text-base gap-6">
                <a href=""><img src="{logo}" className="w-20 " alt=""/>Logo</a>
                <ul className='md:flex hidden space-x-4 items-center'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-base text-gray-700'
              >
                {link}
              </Link>
            ))}
          </ul>
           <div className='space-x-12 hidden lg:flex items-center'>
            <a href="/" className='hidden lg:flex items-center hover:text-blue-600 text-gray-700 '>Login</a>
            <button className='bg-blue-500 text-gray-50 rounded-md px-6 py-3'>Signup</button>
           </div>
           <div className='md:hidden '>
            <button 
            
            onClick={toggleMenu}
            className='text-gray-700'>
        
                {
                    isMenuOpen ? (<FaXmark className='w-6 h-6 '/> ) :(<FaBars className='w-6 h-6 ' />)
                }
            </button>
           </div>
            </div>
               {/* nav items for mobile */}

               <div className={'space-y-4 px-4'}>
               {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-base text-gray-700'
              >
                {link}
              </Link>
            ))}
               </div>
            </nav>
           

             
                
           
        </header>
       
    );
};

export default Navbar;