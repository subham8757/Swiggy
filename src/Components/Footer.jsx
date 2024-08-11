import React from "react";

const Footer = () => {
  return (
    <>
      <div className="min-w-full bg-[#F0F0F5]">
        <div className="w-[1100px]  mx-auto p-6 flex items-center gap-4 justify-center">
          <div className="text-2xl font-semibold">
            For better experience,download the Swiggy app now
          </div>
          <div className="w-[150px]">
            <img src="/Download/appstore.png" alt="app" />
          </div>
          <div className="w-[150px]">
            <img src="/Download/playstore.png" alt="app" />
          </div>
        </div>
      </div>

       <div className="min-w-full bg-[#02060C] flex text-white justify-center gap-40 p-8 h-96">
              <div className="w-32" >
                <img src="./Footer/minilogo.png" alt="footerlog" />
                <p className="text-[13px] mt-2 text-[#9A9795]">  © 2024 Bundl Technologies Pvt. Ltd</p>
              </div>
              <div className="flex flex-col gap-3">
                   <div className="font-bold">Company</div>
                   <div className="text-[#9A9795]">About</div>
                   <div className="text-[#9A9795]">Career</div>
                   <div className="text-[#9A9795]">Swiggy one</div>
                   <div className="text-[#9A9795]">Swiggy Instamart</div>
                   <div className="text-[#9A9795]">Swiggy Genie</div>
                   
              </div>
              <div className="flex flex-col gap-3">
                   <div className="font-bold">Contact us</div>
                   <div className="text-[#9A9795]">Help & Support</div>
                   <div className="text-[#9A9795]">Partner with us</div>
                   <div className="text-[#9A9795]">Ride with us</div>
                   
                   
              </div>
              <div className="flex flex-col gap-3">
                   <div className="font-bold">We deliver to</div>
                   <div className="text-[#9A9795]">Banglore</div>
                   <div className="text-[#9A9795]">Gurgaon</div>
                   <div className="text-[#9A9795]">Hydrabad</div>
                   <div className="text-[#9A9795]">Delhi</div>
                   <div className="text-[#9A9795]">Mumbai</div>
                   <div className="text-[#9A9795]">Pune</div>
              </div>
       </div>
    </>
  );
};

export default Footer;
