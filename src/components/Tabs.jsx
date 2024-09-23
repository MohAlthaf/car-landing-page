import React, { useState } from "react";
import Featured1 from "../assets/images/featured1.png";
import Featured2 from "../assets/images/featured2.png";
import Featured3 from "../assets/images/featured3.png";
import Featured4 from "../assets/images/featured4.png";
import Featured5 from "../assets/images/featured5.png";
 
import { Icon } from "@iconify/react";
// Import your images
import PorscheLogo from "../assets/images/logo1.png";
import BMWLogo from "../assets/images/logo2.png";
import BenzLogo from "../assets/images/logo3.png";
const carsData = {
  Porsche: [
    {
      name: "Porsche 911",
      model: "Model X",
      image: Featured1,
      price: "$127,000",
      description:
        "A legendary sports car with a rich heritage and timeless design.",
    },
    {
      name: "Porsche Cayenne",
      model: "Model Y",
      image: Featured2,
      price: "$85,000",
      description: "A luxury SUV that combines sportiness with practicality.",
    },
  ],
  BMW: [
    {
      name: "BMW M3",
      model: "M Performance",
      image: Featured3,
      price: "$70,000",
      description:
        "A high-performance sedan with a powerful engine and sharp handling.",
    },
    {
      name: "BMW X5",
      model: "X Series",
      image: Featured4,
      price: "$60,000",
      description:
        "A luxury SUV that offers a perfect blend of performance and comfort.",
    },
  ],
  Benz: [
    {
      name: "Mercedes-Benz C-Class",
      model: "C300",
      image: Featured5,
      price: "$42,000",
      description:
        "A stylish sedan with advanced technology and refined luxury.",
    },
    {
      name: "Mercedes-Benz GLE",
      model: "GLE 450",
      image: Featured5,
      price: "$75,000",
      description:
        "A mid-size SUV with premium features and exceptional performance.",
    },
  ],
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderCars = () => {
    if (activeTab === "All") {
      return Object.entries(carsData).flatMap(([brand, cars]) =>
        cars.map((car, index) => (
              <div className="flex justify-center">
              <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
                <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
                <p className="text-text-color text-h4-mobile">Turbo 5</p>
                <div className="flex items-end justify-end">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-[160px] mt-4"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-h3-mobile">{car.price}</p>
                </div>
                <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
                  <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
                </button>
              </div>
            </div>
          ))
      );
    } else {
      return carsData[activeTab].map((car, index) => (
        <div className="flex justify-center">
        <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
          <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
          <p className="text-text-color text-h4-mobile">Turbo 5</p>
          <div className="flex items-end justify-end">
            <img
              src={car.image}
              alt={car.name}
              className="w-[160px] mt-4"
            />
          </div>

          <div className="mt-6">
            <p className="text-h3-mobile">{car.price}</p>
          </div>
          <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
            <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
          </button>
        </div>
      </div>
      ));
    }
  };

  const tabs = [
    { name: "All", image: PorscheLogo }, // Replace with a generic "All" image if you have one
    { name: "Porsche", image: PorscheLogo },
    { name: "BMW", image: BMWLogo },
    { name: "Benz", image: BenzLogo },
  ];

  return (
    <div className="w-full max-w-4xl  mx-auto mt-12 ">
      <div className="flex items-center justify-center space-x-2 lg:space-x-8  ">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-3 py-3 lg:py-2 lg:px-2 text-sm font-medium bg-container-color text-opacity-50 rounded-2xl lg:rounded-2xl ${
              activeTab === tab.name ? "  bg-first-color" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <img
              src={tab.image}
              alt={tab.name}
              className="w-6 h-6 lg:w-8 lg:h-8 object-contain mx-auto"
            />
            {/* <span>{tab.name}</span> */}
          </button>
        ))}
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 lg:mt-12 ">
        {renderCars()}
      </div>
    </div>
  );
};

export default Tabs;
