import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Card from './Card'

const TopRestro = () => {
  
    const [show,setShow] =useState(0)

  const topList=[
    {name :"Apni Rasoi", src: "/Top/top1.jpg" , alt: "restro" , rating:"4.1" , address:"Saket"},
    {name :"Paratha Junction", src: "/Top/top2.jpeg" , alt: "restro",  rating:"4.2" , address:"Karol bagh"},
    {name :"Rolls King", src: "/Top/top3.jpeg" , alt: "restro" ,  rating:"4.3" , address:"Laxmi Nagar"},
    {name :"Punjabi Angethi", src: "/Top/top4.jpeg" , alt: "restro" ,  rating:"4.5" , address:"Patel Nagar"},
    {name :"Veg Dawaat", src: "/Top/top5.jpeg" , alt: "restro" ,  rating:"4.0" , address:"Lajpat Nagar"},
    {name :"Madras Cafe", src: "/Top/top6.jpeg" , alt: "restro" ,  rating:"4.6" , address:"Malviya Nagar"},
    {name :"Veerji Malai Chaap", src: "/Top/top7.jpeg" , alt: "restro" ,  rating:"4.8" , address:"Hauz Khas"},
    {name :"Pizza hut", src: "/Top/top8.jpeg" , alt: "restro" ,  rating:"4.1" , address:"Qutub Minar"},
    {name :"Haldiram", src: "/Top/top9.jpeg" , alt: "restro" ,  rating:"4.1" , address:"INA"},
    {name :"Anna purna", src: "/Top/top10.jpeg" , alt: "restro" ,  rating:"4.2" , address:"Rajouri Garden"},
    {name :"Great Indian Khicdhi", src: "/Top/top11.jpeg" , alt: "restro" ,  rating:"4.5" , address:"DDA Market"},
    {name :"Dominos", src: "/Top/top12.jpeg" , alt: "restro" ,  rating:"4.2" , address:"Nehru Place"},
    {name :"Fresh Oven", src: "/Top/top13.jpeg" , alt: "restro" ,  rating:"4.1" , address:"Moti Nagar"},
    {name :"Vitalbowns", src: "/Top/top14.jpeg" , alt: "restro" ,  rating:"4.1" , address:"C.R Park"},
    {name :"Baba ka Dhabba", src: "/Top/top15.jpeg" , alt: "restro" ,  rating:"4.6" , address:"Greater Kailash"},
    {name :"Chayos", src: "/Top/top16.jpeg" , alt: "restro" ,  rating:"4.2" , address:"Chandani Chowk"},
    {name :"Biryani Blues", src: "/Top/top17.jpeg" , alt: "restro" ,  rating:"4.3" , address:"Saket"},
    {name :"Punjabi Rasoi", src: "/Top/top18.jpeg" , alt: "restro" ,  rating:"4.3" , address:"Janakpuri"},
    {name :"WOW momos", src: "/Top/top19.jpeg" , alt: "restro" ,  rating:"4.2" , address:"Green Park"},
    {name :"Juneja Kitechen", src: "/Top/top20.jpeg" , alt: "restro" ,  rating:"4.3" , address:"AIMS"},
  ]

  const showPrev =() =>{
    if(show===0) return false
    setShow(show - 4)

   }

   const showNext =() =>{
    if(topList.length-4 === show) return false
    setShow(show + 4)

   }

  return (
    <div className="min-w-full">
    <div className="w-[1100px]  mx-auto p-6 ">
      <div className=" flex">
        <div className="text-2xl font-bold">Top restaurant chains in Delhi</div>

        <div className="ml-auto flex gap-2">
          <div className="bg-[#D8D9DA]  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={showPrev} >
            <FaArrowLeft />
          </div>
          <div className="bg-[#D8D9DA]  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={showNext} >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex  overflow-hidden  gap-8 mt-4">
            {topList.map((el,index)=>{
                return (
                 <div key={index} className='shrink duration-700' style={{
                    transform: `translate(-${show*100}%)`
                  }} >
                     <Card {...el}/>
                 </div>
               
            )
            })}
       
      </div>
      <hr className="mt-10" />
    </div>
   
  </div>
  )
}

export default TopRestro