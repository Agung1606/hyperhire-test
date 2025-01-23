"use client"

import React, { useState, useRef, useEffect } from 'react'
import { heroInfo1, heroInfo2, testimonials } from "../constants/index"
import { 
  motion, 
} from "framer-motion";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import CardSlider from './CardSlider';
import { checkboxText } from '../constants/index';

const Hero = () => {
  const motionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: "0px" }
    )

    if (motionRef.current) observer.observe(motionRef.current);

    return () => {
      if (motionRef.current) observer.unobserve(motionRef.current);
    };
  }, [])

  return (
    <div className='py-[5rem]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap-y-10'>
          <div>
            <motion.div 
              ref={motionRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
              className='relative bg-white w-fit py-[6px] px-3 mb-4 rounded-lg'
            >
              <div className='w-3 h-3 bg-white rotate-45 absolute -bottom-1 -z-0' />
              <p className='text-lg text-[#40E2E8] font-poppins font-black'>풀타임, 파트타임</p>
            </motion.div>
            <motion.h1 
              ref={motionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='text-[2.5rem] text-white font-poppins font-black leading-relaxed mb-4'
            >
              최고의 실력을 가진<br />
              <span>외국인 인재를 찾고 계신가요?</span>
            </motion.h1>
            <motion.div
              ref={motionRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p 
                className='text-2xl text-white/90 font-poppins font-black leading-relaxed mb-4'
              >
                법률 및 인사관리 부담없이<br />
                <span>1주일 이내에 원격으로 채용해보세요.</span>
              </p>
              <a href="" className='hidden md:flex text-xl text-white font-poppins font-black underline'>
                개발자가 필요하신가요?
              </a>
            </motion.div>
            <motion.div 
              ref={motionRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='hidden xl:flex gap-x-8 mt-16'
            >
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
            </motion.div>
          </div>
          <CardSlider 
            testimonials={testimonials} 
            className='flex-1 flex justify-between items-center' 
          />
        </div>
        <div className='hidden lg:flex mt-16'>
          <InfiniteMovingCards items={heroInfo2} direction='left' speed='normal' />
        </div>
        <div className='block md:hidden mt-16'>
          <div className='grid grid-cols-2 w-fit gap-y-2 mb-6'>
            {checkboxText.map((text, index) => (
              <div key={index} className='flex items-center gap-x-2'>
                <input type="checkbox" className='w-7 h-7 rounded-xl' />
                <p className='text-lg text-white font-poppins font-black'>{text}</p>
              </div>
            ))} 
          </div>
          <a href="" className='text-lg text-[#FBFF23] font-poppins font-black underline'>개발자가 필요하신가요?</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;