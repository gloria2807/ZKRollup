import React from 'react';
import { FaGrinHearts } from 'react-icons/fa';
import { GiHeartBattery } from 'react-icons/gi';

const statsData = [
  { title: <FaGrinHearts size={250} className='text-yellow-200'/> },
  { bri: "Q1: Deploy something that doesn’t break", value: "Q2: Make CEX listings beg us", sub:"Q3: World Domination "},
  { title: <GiHeartBattery size={250} className='text-yellow-200' /> },
];

const Roadmap = () => {
  return (
    <section id='roadmap'>
    <div className="w-full flex flex-col gap-[80px] relative md:pt-[120px] pt-[80px] md:px-[120px] bg-gray4">
           <div data-aos='zoom-in-down' className="flex flex-col gap-2 items-center justify-center">
            <span className='font-jost md:text-[50px] text-[35px] max-w-[900px] text-center intr'>ROADMAP</span>
        </div>
    <div data-aos='zoom-in' className="w-full flex md:flex-row font-shizuru introd flex-col items-center justify-center">
              {statsData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 text-justify">
                        <span className="w-xs">{item.title}</span>
                        <span className="px-5 text-[24px]">{item.bri}</span>
                        <span className="px-5 text-[24px]">{item.value}</span>
                        <span className="px-5 text-[24px]">{item.sub}</span>
                    </div>
                ))}
        </div>
        </div>
        </section>
  )
}

export default Roadmap;