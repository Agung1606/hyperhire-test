"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="flex justify-between items-center w-full antialiased font-sans mx-auto px-4 md:px-8 lg:px-12 py-20 border-2 border-blue-600">
      <button
        onClick={handlePrev}
        className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
      >
        <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
      </button>
      <div className="relative w-full h-80 border-2 border-red-600">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index)
                  ? 999
                  : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 w-[18rem] h-fit bg-white rounded-md px-4 py-6"
            >
              <div className='flex flex-col items-center mb-10'>
                <div className='relative mb-5'>
                  <Image 
                    src={'/profile-pic.jpg'}
                    alt='profile picture'
                    width={130}
                    height={130}
                    className='object-cover rounded-full'
                  />
                  <div className='absolute bottom-0 right-2'>
                    <Image 
                      src={'/columbia-flag.jpg'}
                      alt='flag'
                      width={28}
                      height={28}
                      className='object-cover rounded-sm'
                    />
                  </div>
                </div>
                <p className='text-2xl text-black font-bold font-poppins'>
                  Agung Saputra
                </p>
                <p className='text-xl text-blue-600 font-semibold font-notoJp'>
                  Web Developer <span className='font-bold'>· 3y+</span>
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={handleNext}
        className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
      >
        <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};
