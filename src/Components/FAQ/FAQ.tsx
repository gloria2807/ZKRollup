import React from "react";
import { useState } from "react";

const faqItems = [
  {
    question: "Is this a real chain?",
    answer:
      "Surprisingly, yes.",
  },
  {
    question: "Is it audited? ",
    answer:
      "It’s audited by frogs with PhDs.",
  },
  {
    question: "What makes ZenoLayer better?",
    answer: "It’s fast, it’s private, and it didn’t raise $500M to do nothing.",
  },
  {
    question: "Is $ZENO a security?",
    answer:
      "We don’t even know if *you* are.",
  },
];

const Faq = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    return (
        <section id="faq">
       <div className="w-full flex flex-col gap-[80px] relative md:py-[120px] py-[80px] md:px-[120px]">
           <div className="flex flex-col gap-2 items-center justify-center">
            <span data-aos='zoom-out-down' className='text-light md:text-[50px] text-[35px] max-w-[900px] text-center intr'>FAQ</span>
        </div>

            <div className="w-full flex flex-col items-center justify-center gap-[30px]">
                {faqItems.map((item, index) => {
                    const isOpen = openIndexes.includes(index);
                    return (
                        <div key={index} data-aos='flip-up' className="w-full md:max-w-[800px] max-w-[85%] z-[1]">
                            <div
                                onClick={() => toggleItem(index)}
                                className="w-full flex items-center justify-between border border-gray3 px-5 h-[52px] cursor-pointer"
                            >
                                <span className="text-light text-xl text-jost">{item.question}</span>
                                <span className="text-light text-2xl text-jost">{isOpen ? "-" : "+"}</span>
                            </div>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] py-4 px-5' : 'grid-rows-[0fr] px-5'
                                    }`}
                            >
                                <div className="overflow-hidden text-xl">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl" />
        </div>
        </section>
    )
}

export default Faq