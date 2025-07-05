import React from 'react';
import { GiTechnoHeart } from 'react-icons/gi';


const About = () =>  {
  return (
    <section id='about'>
    <div className='py-15 px-5 sm:py-0 relative'>
        <div className="container md:ml-30 min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8
            place-items-center">
                <div data-aos='fade right'>
                    <GiTechnoHeart size={350}  
                    className='relative w-full max-w-[400px]'/>
                </div>
                <div data-aos='fade-left' className='relative'>
                    <div className=''>
                                    <h1
                                    className='text-4xl font-semibold pt-20 pb-3 intr text-white'>What Even Is ZenoLayer?</h1>
                                  <p className='font-jost int pb-2'><b>Zeno</b> gets you Ethereum security, meme-level vibes, and a dev experience smoother than airdrop farming in 2021.</p>
                <h3 className='pb-2'><b>Why $ZENO Stands Out</b></h3>
<div>
<p className='pb-2 int'>ZenoLayer is a zero-knowledge Layer 2 scaling Ethereum with:</p>
<ol className='int'>
<li>1. <b>🧠 zk-SNARKs</b>(real math, no magic)</li>
<li>2. 🔒 Built-in privacy (because not everything needs to be public)</li>
<li>3. ⚡ Speed that slaps</li>
<li>4. 💸 Gas fees you’ll actually laugh at</li>
</ol>
</div>
                                    </div>
                                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default About;