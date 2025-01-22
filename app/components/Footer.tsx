import React from 'react'
import { IconArrowRight } from "@tabler/icons-react"
import { infoFooterCard } from '../constants/index'


const InfoTemplate = ({ txt1, txt2, txt3, className }: { txt1: string, txt2: string, txt3: string, className?: string }) => {
  return (
     <div className={className}>
      <h6 className='text-[#343741] text-sm font-poppins font-black'>{txt1}</h6>
      <p className='text-[#5E626F] font-poppins font-black'>{txt2}</p>
      <p className='text-[#5E626F] font-poppins font-black'>{txt3}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#FBFBFB] py-[5rem]'>
      <div className='container space-y-20'>
        <div className='flex flex-col xl:flex-row gap-x-28'>
          <div>
            <div className='flex items-center gap-x-2 mb-2'>
              <img src="/hyperfire-logo-1.png" alt="Hyperfire Logo" className='object-cover' />
              <h2 className='text-2xl text-[#2F2C2D] font-bold'>hyperhire</h2>
            </div>
            <p className='text-[14px] font-poppins font-black mb-4 w-full'>
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className='text-[13px] text-[#5E626F] font-poppins font-black mb-3'>
              010-0000-0000
            </p>
            <p className='text-[13px] text-[#5E626F] font-poppins font-black'>
              aaaaa@naver.com
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1'>
            {infoFooterCard.map((info, index) => (
              <div
                key={index}
                className='bg-white w-48 h-fit p-4 rounded-xl space-y-5'
              >
                <div className='space-y-2'>
                  <div className='bg-[#EFF1F6] w-fit p-2 rounded-lg'>
                    {index === 2 ? <p className='text-slate-500 font-mono font-bold'>{info.icon}</p> : info.icon}
                  </div>
                  <p className='text-[#343741] text-[13px] leading-[21px] font-poppins font-black'>{info.text}</p>
                </div>
                <div className='flex items-center gap-x-2'>
                  <p className='text-[#5E626F] font-poppins font-black'>
                    바로가기
                  </p>
                  <button className='border-2 border-[#5E626F] rounded-lg p-[2px]'>
                    <IconArrowRight width={17} height={17} className='text-[#5E626F]' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='flex items-center gap-x-2'>
            <InfoTemplate txt1='상호명' txt2='하이퍼하이어' txt3='Hyperhire India Private Limited' className='flex-1' />
            <InfoTemplate txt1='대표 CEO' txt2='김주현' txt3='Juhyun Kim' className='flex-1' />
          </div>
          <div className='flex flex-col items-start lg:flex-row lg:items-center gap-x-4 gap-y-6'>
            <InfoTemplate txt1='사업자등록번호 CIN' txt2='427-86-01187' txt3='U74110DL2016PTC290812' />
            <InfoTemplate txt1='주소 ADDRESS' txt2='서울특별시 강남대로 479, 지하 1층 238호' txt3='D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India' />
          </div>
        </div>
        <p className='text-[#5E626F] text-sm font-poppins font-black'>ⓒ 2023 Hyperhire</p>
      </div>
    </div>
  )
}

export default Footer