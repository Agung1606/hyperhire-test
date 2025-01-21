import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { heroInfo1, heroInfo2, testimonials } from "../constants/index"

const Hero = () => {

  return (
    <div className='pt-[8rem] pb-[5rem] min-h-screen'>
      <div className='container flex justify-between'>
        <div className='flex-1 '>
          <h1 className="text-[2.5rem] font-black font-poppins text-white leading-relaxed mb-4">
            최고의 실력을 가진<br />
            <span className="text-white">외국인 인재를 찾고 계신가요?</span>
          </h1>
          <p className='text-2xl font-poppins font-black text-white/90 leading-relaxed mb-4'>
            법률 및 인사관리 부담없이<br />
            <span>1주일 이내에 원격으로 채용해보세요.</span>
          </p>
          <a href="" className='text-xl font-poppins font-black text-white underline'>개발자가 필요하신가요?</a>
          <div className='flex justify-between mt-16'>
            {heroInfo1.map(({ title, desc}, index) => (
              <div key={index} className='border-t-2 border-white/90 py-2 w-44 h-auto'>
                <h3 className='text-white font-poppins font-black text-lg'>
                  {title}
                </h3>
                <p className='text-white/80 font-poppins font-black'>
                  {desc}
                </p>
            </div>
            ))}
          </div>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <div className='flex justify-between items-center gap-x-4 mt-14 pl-12 md:pl-16 lg:pl-[87px]'>
        {heroInfo2.map((info, index) => (
          <div 
            key={index}
            className='bg-white/20 backdrop-blur-sm p-4 rounded-lg flex-1 flex items-center gap-x-2'
          >
            <div className='p-3 bg-white/40 rounded-lg'>
              {info.icon}
            </div>
            <p className='font-poppins font-black text-white text-xl'>{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero;