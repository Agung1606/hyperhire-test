"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { 
  motion, 
  AnimatePresence, 
  useTransform, 
  useMotionValue, 
  useSpring 
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  profileSrc: string;
  flagSrc: string;
  name: string;
  experience: string;
  hobbies: string[];
  index: number;
};

const Card = ({profileSrc, flagSrc, name, experience, hobbies, index}: Testimonial) => {
  const [role, duration] = experience.split("·");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
  <motion.div
    key={index}
    className={`absolute w-[18.5rem] h-fit bg-white rounded-md px-4 py-6 ${
      index === 0 ? "-translate-x-20 opacity-90" : index === 2 ? "translate-x-20 opacity-90" : "scale-110 z-20"
    }`}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    {/* ---TOOLTIP--- */}
    <AnimatePresence mode="popLayout">
      {hoveredIndex === index && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
            whiteSpace: "nowrap",
          }}
          className="absolute -top-12 left-[71px] flex text-xs flex-col items-center justify-center rounded-lg bg-white/80 z-50 shadow-xl px-3 py-1"
        >
          <div className="text-green-500 text-xl font-notoJp flex items-center gap-x-2">
            <div className="w-7 h-7 bg-green-300 rounded-full flex items-center justify-center">
              <p className="font-bold">$</p>
            </div>
            <p className="font-bold">월100만원</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    {/* ---TOOLTIP--- */}
    <div className='flex flex-col items-center mb-10'>
      <div className='relative mb-5'>
        <Image 
          src={profileSrc}
          alt='profile picture'
          width={130}
          height={130}
          className='object-cover rounded-full'
        />
        <div className='absolute bottom-0 right-2'>
          <Image 
            src={flagSrc}
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
            ? "-mr-2"
            : "-ml-2"
          }`}
        >
          {hobby}
        </p>
      ))}
    </div>
  </motion.div>
  )
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="flex-1 flex justify-between items-center relative antialiased font-sans mx-auto px-4 md:px-8 lg:px-12 py-20">
      <button
        onClick={handlePrev}
        className="text-white active:scale-75"
      >
        <IconChevronLeft width={40} height={40} />
      </button>
      <div className="relative flex justify-center items-center w-full h-80">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              index={index} 
              profileSrc={testimonial.profileSrc}
              flagSrc={testimonial.flagSrc}
              name={testimonial.name} 
              experience={testimonial.experience} 
              hobbies={testimonial.hobbies} 
            />
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={handleNext}
        className="text-white active:scale-75"
      >
        <IconChevronRight width={40} height={40} />
      </button>
    </div>
  );
}