 

import React from "react";
import Map from "../assets/icons/map.svg";
import Features1 from "../assets/images/features.png";
import Tabs from "../components/Tabs";

const Features = () => {
  return (
    <> 
    <div className="mt-32">
      <h2 className="text-h2-mobile text-center lg:text-h2-desktop text-titled-color font-semibold">
        More Features
      </h2>
      <div className="relative flex justify-center items-center overflow-hidden">
        <div className="relative overflow-hidden w-[450px] h-[480px] lg:w-[600px] lg:h-[600px]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transform -rotate-12 origin-center z-[-1]"
            style={{ backgroundImage: `url(${Map})` }}
          ></div>
          {/* Corner div */}
         
          <div className="flex items-center justify-center mt-16">
            <div className="relative">
              <img
                src={Features1}
                alt="Features"
                className="w-[150px] lg:w-[200px] relative z-10"
              />
              <div
                className=" bg-black p-4  absolute top-20  px-8 py-4 z-20 rounded-3xl flex flex-col text-center items-center justify-center "
                style={{ left: "-58px" }}
              >
                <h3 className="text-h3-mobile lg:text-h3-desktop text-white">
                  800cv
                </h3>
                <p className="text-smaller-mobile lg:text-smaller-desktop text-white">
                  Turbo <br />
                  Charging
                </p>
              </div>
              <div
                className=" bg-black p-4  absolute top-36  px-8 py-4 z-20 rounded-3xl flex flex-col text-center items-center justify-center "
                style={{ right: "-58px" }}
              >
                <h3 className="text-h3-mobile lg:text-h3-desktop text-white">
                  800cv
                </h3>
                <p className="text-smaller-mobile lg:text-smaller-desktop text-white">
                  Turbo <br />
                  Charging
                </p>
              </div>
              <div
                className=" bg-black p-4  absolute bottom-4  px-8 py-4 z-20 rounded-3xl flex flex-col text-center items-center justify-center "
                style={{ left: "-58px" }}
              >
                <h3 className="text-h3-mobile lg:text-h3-desktop text-white">
                  800cv
                </h3>
                <p className="text-smaller-mobile lg:text-smaller-desktop text-white">
                  Turbo <br />
                  Charging
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="mt-20 lg:mt-12">
      <h2 className="text-h2-mobile text-center lg:text-h2-desktop text-titled-color font-semibold">
         Featured Luxuary Cars
      </h2>
      <Tabs/>

      <div>
        
      </div>
      </div>
</>
  );
};

export default Features;
