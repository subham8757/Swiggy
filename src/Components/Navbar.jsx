import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput]=useState("")

  const handleClick = () => {
      setToggle(true)
  };

  const hideMenu=(e)=>{
    
     setToggle(false)
  }

  

  return (
    <>
      <div className="overlay w-full h-full fixed z-10 duration-500" onClick={hideMenu} style={{
         opacity: toggle? 1: 0,
         visibility: toggle ? "visible": "hidden"
      }}>
          <div onClick={(e)=>{
            e.stopPropagation()
          }} className="w-[500px] bg-white duration-500 h-full absolute p-8" style={{
              left: toggle ? "0%" : "-100%"
          }}>
              
               <div className="text-lg cursor-pointer" onClick={hideMenu}>
                 <RxCross1/>
               </div>
               <div>
                   <input type="text" placeholder="Enter your Location" className="border w-full p-2 mt-5" value={input} onChange={(e)=> setInput(e.target.value)}/>
               </div>
               
          </div>
      </div>
      <div className=" min-w-full shadow-lg  bg-white">
        <div className=" w-[1200px] mx-auto p-4 flex gap-10">
          <div>
            <div className="w-[60px]">
              <img src="/swiggy.png" alt="logo" />
            </div>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer "
            onClick={handleClick}
          >
            <div className="font-bold border-b-2 hover:text-[#ff5200]">
              {input==="" ? "Other" : input }
            </div>
            <div className="font-bold text-[0.9rem] text-[#ff5200]">
              <IoIosArrowDown />
            </div>
          </div>

          <div className=" ml-auto flex items-center gap-8 font-semibold ">
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                {" "}
                <BsBag />
              </div>
              <div>Swiggy Corporate</div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                <IoIosSearch />
              </div>
              <div>Search</div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                <CiDiscount1 />
              </div>
              <div>Offers</div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                {" "}
                <IoIosHelpBuoy />
              </div>
              <div>Help</div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                <CiUser />
              </div>
              <div>Sign in</div>
            </div>
            <div className="flex items-center gap-2 hover:text-[#ff5200] cursor-pointer">
              <div>
                {" "}
                <CiShoppingCart />
              </div>
              <div>Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
