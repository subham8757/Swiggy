import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FoodCategories = () => {

    const [show,setShow] =useState(0)


   


  let foodItem = [
    { name: "Pure-Veg Delights", src: "/Food/food1.png", alt: "food" },
    { name: "Pasta", src: "/Food/food2.jpeg", alt: "food" },
    { name: "Rolls", src: "/Food/food3.png", alt: "food" },
    { name: "South Indian", src: "/Food/food4.jpeg", alt: "food" },
    { name: "Salad", src: "/Food/food5.jpeg", alt: "food" },
    { name: "Ras Malai", src: "/Food/food6.jpeg", alt: "food" },
    { name: "Pure Veg", src: "/Food/food7.jpeg", alt: "food" },
    { name: "Pav Bhaji", src: "/Food/food8.jpeg", alt: "food" },
    { name: "Chole Bhature", src: "/Food/food9.jpeg", alt: "food" },
    { name: "Cakes", src: "/Food/food10.jpeg", alt: "food" },
    { name: "Burgers", src: "/Food/food11.jpeg", alt: "food" },
    { name: "Poori", src: "/Food/food12.jpeg", alt: "food" },
    { name: "Pizzas", src: "/Food/food13.jpeg", alt: "food" },
    { name: "Paratha", src: "/Food/food14.jpeg", alt: "food" },
    { name: "North Indian", src: "/Food/food15.jpeg", alt: "food" },
    { name: "Noodles", src: "/Food/food16.jpeg", alt: "food" },
    { name: "Idli", src: "/Food/food17.jpeg", alt: "food" },
    { name: "Dosa", src: "/Food/food18.jpeg", alt: "food" },
    { name: "Chinese", src: "/Food/food19.jpeg", alt: "food" },
    { name: "Biryani", src: "/Food/food20.jpeg", alt: "food" },
  ];

  const showPrev =() =>{
    if(show===0) return false
    setShow(show - 3)

   }

   const showNext =() =>{
    if(foodItem.length -8 === show) return false
    setShow(show + 3)

   }

  return (
    <div className="min-w-full">
      <div className="w-[1100px]  mx-auto p-6 ">
        <div className=" flex">
          <div className="text-2xl font-bold">What's on your mind?</div>

          <div className="ml-auto flex gap-2">
            <div className="bg-[#D8D9DA]  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={showPrev} >
              <FaArrowLeft />
            </div>
            <div className="bg-[#D8D9DA]  w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" onClick={showNext}>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="flex  overflow-hidden">
          {foodItem.map((el,index) => {
            return (
              <div key={index} style={{
                transform: `translate(-${show*100}%)`
              }} className="w-[150px]  shrink-0 overflow-hidden duration-700" >
                <img className="w-[100%]" src={el.src} alt={el.alt} />
              </div>
            );
          })}
        </div>
        <hr className="mt-10" />
      </div>
     
    </div>
  );
};

export default FoodCategories;
