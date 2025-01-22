import React from 'react'

function Header() {
  return (
    <div className='z-50 fixed top-0 left-0 w-full py-3'>
      <div className='container flex items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <img src="/hyperfire-logo-2.png" alt="Hyperfire Logo" className='object-cover' />
          <p className='font-poppins font-semibold text-sm text-white'>hyperhire</p>
        </div>
        <div className='hidden lg:flex items-center gap-x-6'>
          <p className='text-white font-poppins font-black'>채용</p>
          <p className='text-white font-poppins font-black'>해외 개발자 활용 서비스</p>
        </div>
        <button className='hidden md:block py-[6px] px-[24px] bg-white rounded-lg font-poppins font-black text-[#4A77FF]'>문의하기</button>
        <button className='block md:hidden'>
          <img src="/burger-icon.svg" alt="Hamburger Icon" />
        </button>
      </div>
    </div>
  )
}

export default Header