import React from 'react'
import { MdStars } from "react-icons/md";

const Card = ({src, name, rating, address,alt}) => {
  return (
    <div className=' w-[235px] hover:p-2 duration-150 p-3'>
          <div className='shadow-inner h-56 w-full'>
              <img className='rounded-2xl shadow-xl h-full w-full object-cover' src={src} alt={alt} />
          </div>
          <div className='font-bold text-[18px] ml-2 mt-2'>
              {name}
          </div>
          <div className='flex items-center ml-2 gap-1 '>
               <div className='text-2xl text-[#1B9339]'>
                    <MdStars/>
               </div>
               <div className='text-l'>
                  {rating}
               </div>
          </div>
          <div className='font-normal text-[16px] ml-2 mt-2 text-[#54585C]'>
                {address}
          </div>
          
    </div>
  )
}

export default Card