"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { heroInfo1, heroInfo2, testimonials } from "../constants/index"
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { 
  motion, 
  AnimatePresence, 
  useTransform, 
  useMotionValue, 
  useSpring 
} from "framer-motion";
const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <div className='py-[5rem]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap-y-10'>
          <div>
            <h1 className='text-[2.5rem] text-white font-poppins font-black leading-relaxed mb-4'>
              최고의 실력을 가진<br />
              <span>외국인 인재를 찾고 계신가요?</span>
            </h1>
            <p className='text-2xl text-white/90 font-poppins font-black leading-relaxed mb-4'>
              법률 및 인사관리 부담없이<br />
              <span>1주일 이내에 원격으로 채용해보세요.</span>
            </p>
            <a href="" className='hidden md:flex text-xl text-white font-poppins font-black underline'>
              개발자가 필요하신가요?
            </a>
            <div className='hidden xl:flex gap-x-8 mt-16'>
              {heroInfo1.map((info, index) => (
                <div key={index} className='border-t-2 border-white/90 py-2 w-44 h-auto'>
                  <h3 className='text-white font-poppins font-black text-lg'>
                    {info.title}
                  </h3>
                  <p className='text-white/80 font-poppins font-black'>
                    {info.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 flex justify-between items-center'>
            <button className='text-white active:scale-75'>
              <IconChevronLeft width={40} height={40} />
            </button>
            <div className='relative w-[18.5rem] h-[26.2rem]'>
              <AnimatePresence>
                {testimonials.map((testimonial) => (
                  <motion.div 
                    key={testimonial.id} 
                    className={`absolute w-[18.5rem] h-[26.2rem] bg-white rounded-md px-4 py-6 ${
                      testimonial.id === 0 ? "-translate-x-12 xl:-translate-x-20 opacity-90 pointer-events-none" : 
                      testimonial.id === 2 ? "translate-x-12 xl:translate-x-20 opacity-90 pointer-events-none" : 
                      "scale-105 z-20"
                    }`}
                    onMouseEnter={() => setHoveredIndex(testimonial.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* ---TOOLTIP--- */}
                    <AnimatePresence mode="popLayout">
                      {hoveredIndex === testimonial.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.6 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 260,
                              damping: 10,
                            },
                          }}
                          exit={{ opacity: 0, y: 20, scale: 0.6 }}
                          style={{
                            translateX: translateX,
                            rotate: rotate,
                            whiteSpace: "nowrap",
                          }}
                          className="absolute -top-12 left-[71px] flex text-xs flex-col items-center justify-center rounded-lg bg-[#E9F7EF] z-50 shadow-xl px-3 py-1"
                        >
                          <div className="text-[#00C696] text-xl font-notoJp flex items-center gap-x-2">
                            <div className="w-7 h-7 bg-[#BBF3D2] rounded-full flex items-center justify-center">
                              <p className="font-bold">$</p>
                            </div>
                            <p className="font-bold">월100만원</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* ---TOOLTIP--- */}
                    <div className='flex flex-col items-center mb-10'>
                      <div className='relative mb-5'>
                        <Image 
                          src={testimonial.profileSrc}
                          alt='Profile Picture'
                          width={130}
                          height={130}
                          className='object-cover rounded-full'
                        />
                        <div className='absolute bottom-0 right-2'>
                          <Image 
                            src={testimonial.flagSrc}
                            alt='User Flag'
                            width={28}
                            height={28}
                            className='object-cover rounded-sm'
                          />
                        </div>
                      </div>
                      <p className='text-2xl text-black font-poppins font-black'>
                        {testimonial.name}
                      </p>
                      <p className='text-xl text-[#4A77FF] font-poppins font-black'>
                        {testimonial.experience}
                      </p>
                    </div>
                    <div className='grid grid-cols-2 justify-items-center gap-1'>
                      {testimonial.hobbies.map((hobby, index) => (
                        <p 
                          key={index} 
                          className={`w-fit font-poppins font-black text-[#5E626F] text-lg border border-[#C1C5CF] px-2 py-1 rounded-lg ${
                            index === 0 || index === 1
                            ? "col-span-2"
                            : index === 2
                            ? "-mr-2"
                            : "-ml-2"
                          }`}
                        >
                          {hobby}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <button className='text-white active:scale-75'>
              <IconChevronRight width={40} height={40} />
            </button>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-x-[10px] mt-16'>
          {heroInfo2.map((info, index) => (
            <div 
              key={index}
              className='flex-1 bg-white/20 backdrop-blur-md flex items-center gap-x-6 p-4 rounded-xl'
            >
              <div className='bg-white/40 p-3 rounded-lg'>
                {info.icon}
              </div>
              <p className='text-white font-poppins font-black'>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero;