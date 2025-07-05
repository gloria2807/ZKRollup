import React from "react";
import { FaCoins, FaWallet } from "react-icons/fa";
import { GiUnicorn } from "react-icons/gi";
import { RiSwap2Fill } from "react-icons/ri";

const introItems = [
  {
    title: "Create Your Wallet",
    description:
      "download metamask or your wallet of choice from the app store or google play store for free.",
    icon: (
                <FaWallet className="text-9xl text-primary" />
            ),
    duration: "500",
  },
  {
    title: "Switch to ZenoLayer",
    description:
      "we auto-magically do it, just have ETH in your wallet to switch to $ZENO.",
    icon: (
                <FaCoins className="text-9xl text-primary" />
            ),
    duration: "600",
  },
  {
    title: "Buy $ZENO",
    description:
      "Buy $ZENO on ZenSwap or OrbDex. Connect your wallet. Paste the $ZENO token address into Uniswap, select Zeno, and confirm.",
    icon: (
                <GiUnicorn className="text-9xl text-primary" />
            ),
    duration: "700",
  },  
  {
    title: "Hold, HODL, or Yeet into the void",
    description:
      "Hold, HODL, or Yeet into the void. We have ZERO taxes so you don’t need to worry about buying with a specific slippage.",
    icon: (
                <RiSwap2Fill className="text-9xl text-primary" />
            ),
    duration: "700",
  },
];

const Buy = () => {
    return (
      <section id="how">
        <div className="w-full flex flex-col gap-[80px] relative py-[60px] md:px-[120px]">
           <div className="flex flex-col gap-5 items-center justify-center">
            <span data-aos='fade-right' duration="200" className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center intr'>HOW TO BUY $ZENO</span>
            <p data-aos='fade-left' duration="300" className="text-center md:max-w-[640px] max-w-[90%] text-gray1 text-lg">
               Step-by-step timeline:
            </p>
        </div>
            <div className="w-full flex items-center justify-between px-5">
                <div className="flex w-full flex-col gap-[40px]">
                    {introItems.map((item, index) => (
                        <div data-aos="flip-down" data-aos-delay={item.duration} className="w-full bg-gray-900/50 rounded-[20px] px-5 py-[30px] flex items-start gap-[24px] border border-grayborder" 
                        key={index}>
                            {item.icon}
                            <div className="flex flex-col gap-[8px]">
                                <div className="text-light text-[30px]">{item.title}</div>
                                <p className="text-gray1 text-[20px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />

        </div>
        </section>
    );
};

export default Buy;