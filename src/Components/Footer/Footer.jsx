import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { GiTechnoHeart } from 'react-icons/gi';

const Footer = () => {
  return (
    <div data-aos='fade-up'>
        <div className='intro flex italic font-shrik font-bold p-3 items-center justify-center'>
        <AiFillTwitterCircle className='bg-transparent text-9xl mx-10 shadow-custom-inset hover:scale-110 transition-all duration-300 text-[#C2F0E8] cursor-pointer'/>
        <GiTechnoHeart size={100} />
        </div>
    <div className='flex font-parisienne text-xl px-15 text-center justify-center text-white font-semibold'>
    <p>$ZENO is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only. Kindly <b>DYOR</b></p>
    </div>
    <div className='w-full px-15 flex items-center font-jost pb-5 justify-center text-[18px] text-gray-950/70 pt-30'>
            &copy; Ego 2025. Probably not a rug. All rights reserved.✌️
        </div>
    </div>
  )
}

export default Footer;