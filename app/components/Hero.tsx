"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import UserCard from './UserCard';
import { AnimatedTestimonials } from './ui/animated-testimonials';

type Props = {}

const info1 = [
  {
    title: "평균 월 120만원",
    desc: "임금을 해당 국가를 기준으로 계산합니다."
  },
  {
    title: "최대 3회 인력교체",
    desc: "막상 채용해보니 맞지 않아도 걱정하지 마세요."
  },
  {
    title: "평균 3일, 최대 10일",
    desc: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
  },
];

const cardsData = [
  {
    name: "Abhishek Gupta",
    experience: "마케팅·2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
  {
    name: "Abhishek Gupta",
    experience: "마케팅·2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
  {
    name: "Abhishek Gupta",
    experience: "마케팅·2y+",
    hobbies: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"]
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hero = ({}: Props) => {

  return (
    <div className='bg-[#0CAFFF] pt-[5rem] min-h-screen'>
      <div className='container flex justify-between border-2 border-red-600'>
        <div className='border-2 border-green-600'>
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
            {info1.map(({ title, desc}, index) => (
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

export default Hero

{/* <div className='relative flex justify-between border-2 border-yellow-600'>
<button>Left</button>
  {cardsData.map((data, index) => (
    <UserCard
    key={index}
    name={data.name}
    experience={data.experience}
    hobbies={data.hobbies}
    className={`${
      index === 1 ? 'z-20' : 'z-10 opacity-90'
    } transform ${
      index === 0 ? 'translate-x-40' : index === 2 ? '-translate-x-40' : ''
    }`}
    />
  ))}
<button>Right</button>
</div> */}