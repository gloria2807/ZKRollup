import React from 'react';
import { 
    FaLinkedin,
    FaGithub,
    FaTwitter,
} from 'react-icons/fa6';
import { GiPerfumeBottle, GiTechnoHeart } from 'react-icons/gi';



const Hero = () =>  {
  return (
    <section id='home'>
        <div className="container pt-20 flex items-center justify-center" data-aos='fade-up' data-aos-delay='500'>
            <div className="parent flex items-center text-shadow-violet-50">
    <div className='py-5 sm:py-0 relative'>
        <div data-aos='fade-up' className="container md:ml-30 min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8
            place-items-center">
                <div className='relative'>
                    <div className='py-10 px-15'>
                                    <div className="name text-5xl font-shrik flex">
                    <span className='intr pb-8'>
                        $ZenoLayer
                    </span>
                </div>
                                   <div>
     <p className='tagline text-justify intr font-semibold text-shadow-black font-poppins flex'>
                            A zero-knowledge L2 for Ethereum. Finality so instant, it practically sends your transactions back to the past.
                        </p>
</div>
                     <div className="colz">
                        <div className="colz-icon flex py-10 text-8xl items-center justify-center text-shadow-black gap-8">
                                            <a href='#'>
                                                <FaGithub className='bg-transparent rounded-full shadow-custom-inset hover:scale-110 transition-all duration-300 text-white cursor-pointer' />
                                            </a>
                                            <a href='#'>
                                                <FaTwitter className='bg-transparent shadow-custom-inset hover:scale-110 transition-all duration-300 text-white cursor-pointer'/>
                                            </a>
                                            <a href='#'>
                                                <FaLinkedin className='bg-transparent rounded-full shadow-custom-inset hover:scale-110 transition-all duration-300 text-white cursor-pointer'/>
                                            </a>
                                            </div>
                </div>
                                    </div>
                                </div>
                 <div data-aos='fade-up' data-aos-once='false'>
                    <GiTechnoHeart size={350} 
                    className='relative w-full text-yellow-200'/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Hero;