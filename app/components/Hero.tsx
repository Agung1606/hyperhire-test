"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import UserCard from './UserCard';

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

const Hero = ({}: Props) => {

  return (
    <div className='bg-[#0CAFFF] pt-[5rem]'>
      <div className='container w-full min-h-screen flex justify-between gap-x-6'>
        <div className='flex-1'>
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
        <div className='flex-1 flex justify-center'>
          <UserCard />
        </div>
      </div>
    </div>
  )
}

export default Hero