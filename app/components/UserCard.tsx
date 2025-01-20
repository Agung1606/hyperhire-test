import React from 'react'
import Image from 'next/image'

type Props = {
  name: string;
  experience: string;
  hobbies: string[];
  className?: string;
}

const UserCard = ({name, experience, hobbies, className}: Props) => {
  const [role, duration] = experience.split("·");
  return (
    <div className={`w-[18rem] h-fit bg-white rounded-md px-4 py-6 ${className}`}>
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
          {name}
        </p>
        <p className='text-xl text-blue-600 font-semibold font-notoJp'>
          {role} <span className='font-bold'>· {duration}</span>
        </p>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-1'>
        {hobbies.map((hobby, index) => (
          <p 
            key={index} 
            className={`w-fit font-notoJp font-bold text-black/80 text-lg border border-gray-400/80 px-2 py-1 rounded-lg ${
              index === 0 || index === 1
              ? "col-span-2"
              : index === 2
              ? "-mr-3"
              : "-ml-3"
            }`}
          >
            {hobby}
          </p>
        ))}
      </div>
    </div>
  )
}

export default UserCard
