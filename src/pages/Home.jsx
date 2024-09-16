import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-y-4 lg:flex-row  items-center justify-center w-full min-h-screen ">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-center px-30">
        

            <h1 className="ml-24 text-slate-300 dark:text-slate-50 font-bold tracking-wide leading-4 shadow-md text-[100px] hover:text-slate-400">
              ROYAL
            </h1>
           
           <div className="w-1/4 mx-10">

           </div>
            <h1 className="ml-2 text-slate-300 dark:text-slate-50 font-bold tracking-wide leading-4 shadow-md text-[100px] hover:text-slate-400">
              LUXURY
            </h1>
        
            
          </div>
         
         
          <div className="flex flex-col">
           
            <img
              src="./rle.png"
              alt="img"
              width={700}
              height={700}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain h-full w-1/2 transition duration-300 ease-in-out hover:scale-110"
            />
            <button className="absolute align-center bottom-[5%] right-[5%] bg-[#2a2a2a] dark:bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-black">
              <Link to="/explore">Explore Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
