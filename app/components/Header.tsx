import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className='bg-[#0CAFFF] z-50 fixed top-0 left-0 w-full py-3 border-b-black border-b-2'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <p>Logo</p>
          <p className='font-poppins font-semibold text-sm text-white'>hyperhire</p>
        </div>
        <div className='flex items-center gap-x-6'>
          <p className='text-white font-semibold font-notoKr'>채용</p>
          <p className='text-white font-semibold font-notKr'>해외 개발자 활용 서비스</p>
        </div>
        <button className='bg-white px-4 py-1 rounded-lg text-blue-600/90 text-sm font-semibold font-notoKr'>문의하기</button>
      </div>
    </div>
  )
}

export default Header