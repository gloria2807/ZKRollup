import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'How to', link: '#how' },
        { id: 4, name: 'Tokenomics', link: '#token' },
        { id: 5, name: 'Roadmap', link: '#roadmap' },
        { id: 6, name: 'FAQ', link: '#faq' },
    ];

    return (
        <header data-aos='fade-up'  className='md:fixed top-0 left-0 w-full z-20 text-white font-shrik py-10' data-aos-delay='300'>
            <div className="mx-auto flex items-center justify-between px-5">
                <a href='#home' className='flex-start text-4xl font-bold italic text-white'>ZK RollUp</a>
                <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu className='w-8 h-8 text-white' />
                </button>
                <nav className='hidden md:flex items-center space-x-7'>
                    {NavbarLinks.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-yellow-200 cursor-pointer text-lg'>
                            {link.name}
                        </a>
                    ))}
                     <button className='border border-1 font-semibold border-white rounded-full px-10 py-3 hover:bg-white/20 cursor-pointer hover:border-emerald-400'>
          <b className='my-auto text-white hover:text-yellow-200'>buy now</b>
        </button>
          </nav>
            </div>

           <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-emerald-950 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
                <button className='absolute top-5 right-5 text-white' onClick={() => setIsOpen(false)}>
                    <FiX className='w-8 h-8' />
                </button>
                {NavbarLinks.map((link)=>(
                    <a key={link.id} href={link.link} className='text-lg text-white hover:text-gray-300' onClick={() => setIsOpen(false)}>{link.name}</a>
                ))}
            </div>
        </header>
    );
};

export default Navbar;
