import React from 'react';
import { FcPieChart } from 'react-icons/fc';

const Tokenomics = () => {
  return (
    <section id='token'>
    <div className='w-full flex md:flex-row flex-col items-center justify-between md:px-[120px] px-5 md:h-[calc(100vh-80px)] relative md:pb-0 pb-20'>
        <div className='flex flex-col gap-6 px-2 md:mt-0 mt-5'>
            <div data-aos="fade-up" duration="200" className='text-light font-bold md:text-[54px] text-[30px] max-w-[661px] md:leading-[80px] in'>
                Token Supply:
                1,000,000,000
            </div>
            <div className="flex w-full">
                        <div data-aos="flip-down" className="w-[90] bg-gray-900/50 rounded-[20px] px-5 py-[30px] flex items-start border border-grayborder" >
                            <div className="flex flex-col gap-[8px] text-justify">
                                <div className="text-light text-[30px]">
                                  <ul>
                                    <li>- 50% Community Dump Pool</li>
                                    <li>- 20% Airdrop Farmers</li>
                                    <li>- 15% LP Incentives</li>
                                    <li>- 10% Devs Who Won’t Rug</li>
                                    <li>- 5% Frog Foundation™</li>
                                  </ul>
</div>
                            </div>
                        </div>
                        </div>
        </div>
        <div data-aos="fade-up" duration="200" className="md:w-[40%] w-[400px] py-10">
                               <FcPieChart size={350} />
                            </div>
    </div>
    </section>
  )
}

export default Tokenomics;