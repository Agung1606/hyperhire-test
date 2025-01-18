import React from 'react'
import Image from 'next/image'

type Props = {}

const UserCard = ({}: Props) => {
  return (
    <div className='w-[21rem] h-fit bg-white rounded-md p-8'>
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
          Abhishek Gupta
        </p>
        <p className='text-xl text-blue-600 font-semibold font-notoJp'>
          마케팅 <span className='font-bold'>· 2y+</span>
        </p>
      </div>
      <div className='flex flex-col items-center gap-y-1 mb-1'>
        <p className='font-notoJp font-bold text-black/80 text-lg border border-gray-400/80 px-2 py-1 rounded-lg'>마케팅 콘텐츠 제작</p>
        <p className='font-notoJp font-bold text-black/80 text-lg border border-gray-400/80 px-2 py-1 rounded-lg'>인스타그램 관리</p>
      </div>
      <div className='flex justify-center gap-x-1'>
        <p className='font-notoJp font-bold text-black/80 text-lg border border-gray-400/80 px-2 py-1 rounded-lg'>트위터 관리</p>
        <p className='font-notoJp font-bold text-black/80 text-lg border border-gray-400/80 px-2 py-1 rounded-lg '>블로그 글 작성</p>
      </div>
    </div>
  )
}

export default UserCard