import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { heroInfo1, testimonials } from "../constants/index"

const Hero = () => {

  return (
    <div className='bg-[#0CAFFF] pt-[8rem] min-h-screen'>
      <div className='container flex justify-between'>
        <div className='flex-1 '>
          <h1 className="text-[2.5rem] font-semibold font-notoJp text-white leading-relaxed mb-4">
            최고의 실력을 가진<br />
            <span className="text-white">외국인 인재를 찾고 계신가요?</span>
          </h1>
          <p className='text-2xl font-notoJp text-white leading-relaxed mb-4'>
            법률 및 인사관리 부담없이<br />
            <span>1주일 이내에 원격으로 채용해보세요.</span>
          </p>
          <a href="" className='text-xl font-notoJp text-white underline'>개발자가 필요하신가요?</a>
          <div className='flex justify-between mt-16'>
            {heroInfo1.map(({ title, desc}, index) => (
              <div key={index} className='border-t-2 border-white/90 py-2 w-44 h-auto'>
                <h3 className='text-white font-notoJp font-semibold text-lg'>
                  {title}
                </h3>
                <p className='text-white/80 font-notoJp'>
                  {desc}
                </p>
            </div>
            ))}
          </div>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Hero;