import React from "react";
import { Icon } from "@iconify/react";
import HomeCar from "../assets/images/home.png";
import HeroSpecs from "../components/HeroSpecs";
import About from "../assets/images/about.png";
import Features from "../assets/images/features.png";
import Carousel from "../components/Carousel";
import Map from "../assets/icons/map.svg";
import backgroundImage from "../assets/images/document.jpeg";
const Hero = () => {
  return (
    <>
      {/*  style={{ backgroundImage: `url(${backgroundImage})`,}}  */}
      <div className="px-6 flex flex-col justify-center items-center ">
        <div className="max-w-sm ">
          <div className="flex flex-col pt-28 pb-12 lg:pt-32 justify-center items-center ">
            <h1 className="text-h1-mobile lg:text-h1-desktop">
              {" "}
              Choose The Best Car
            </h1>
            <h3 className="text-h3-mobile mt-3  lg:text-h2-desktop">
              {" "}
              Porsche Mission E
            </h3>
            <div className="inline-flex gap-1 justify-center items-center">
              <Icon
                icon="ri:flashlight-fill"
                width="16"
                height="16"
                className="text-first-color "
              />
              <span className="text-small-mobile lg:text-h4-desktop">
                Electric car
              </span>
            </div>
          </div>
          <div className="flex flex-col mx-4 justify-center items-center ">
            <img src={HomeCar} alt="" />
          </div>
          <div className="flex flex-row justify-center  items-center mt-2 lg:mt-8">
            <HeroSpecs
              icon="ri:temp-cold-line"
              value="24°"
              description="TEMPERATURE"
            />
            <HeroSpecs
              icon="ri:dashboard-3-line"
              value="873"
              description="MILEAGE"
            />
            <HeroSpecs
              icon="ri:flashlight-fill"
              value="94%"
              description="BATTERY"
            />
          </div>
        </div>

        <div className="flex justify-center items-center my-14">
          <div className="relative">
            {/* Outer Circle */}
            <div
              className="border-2 border-light-green rounded-full flex justify-center items-center animation-pulse-green"
              style={{ width: "90px", height: "90px" }}
            >
              {/* Inner Circle */}
              <div
                className="border-2 border-dark-green rounded-full flex justify-center items-center animation-scale-glow"
                style={{ width: "70px", height: "70px" }}
              >
                <span className="text-white-color text-small-mobile">
                  START
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  px-6 mt-8 lg:mt-12 lg:mx-32">
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <div>
            <img
              src={About}
              alt=""
              className="rounded-lg"
              style={{ width: "480px" }}
            />

            <div className="relative flex justify-end   shadow-lg right-0">
              <div className="  flex flex-col items-center text-center py-4  rounded-2xl w-44 transform -translate-y-1/2 backdrop-blur-3xl shadow-lg">
                <p className="text-h3-mobile lg:text-h3-desktop">2500+</p>
                <p className="text-smaller-mobile lg:text-smaller-desktop">
                  Supercharges placed along popular routes
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-sm ">
            <h1 className="text-h2-mobile lg:text-h2-desktop text-titled-color w-3/5 ">
              Machines With Future Technology
            </h1>
            <p className="text-h4-mobile lg:text-h4-desktop mt-3">
              See the future with high-performance electric cars produced by
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
            <button className="bg-first-color rounded px-8 py-4 mt-8">
              Know More
            </button>
          </div>
        </div>
        <div className="lg:mx-12">
          <h2 className="mt-4 text-center text-titled-color text-h2-mobile lg:mt-28 lg:text-h2-desktop container font-semibold max-w-md">
            Choose Your Electric Car Of The Porsche Brand
          </h2>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Hero;
