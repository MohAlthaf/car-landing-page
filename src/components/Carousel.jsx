// import React from "react";
// import Slider from "react-slick";
// import Porsche from "../assets/images/popular1.png";
// import { Icon } from "@iconify/react";
// const Carousel = () => {
//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,

//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
// <div className="relative flex flex-row  overflow-x-auto   mx-auto mt-14 gap-4">
//   {/* <Slider > */}
//   <div className="">
//     <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
//       <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
//       <p className="text-text-color text-h4-mobile">Turbo 5</p>
//       <div className="flex items-end justify-end">
//         <img src={Porsche} alt="" className="w-[160px] mt-2" />
//       </div>
//       <div className="flex flex-row justify-between text-smaller-mobile w-[154px] mt-5">
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:dashboard-3-line" width="16" height="16" />
//           </span>
//           <p>3.7 Sec</p>
//         </div>
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:funds-box-line" width="16" height="16" />
//           </span>
//           <p>356 Km/h</p>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-center  text-smaller-mobile gap-1 mt-2">
//         <span>
//           <Icon icon="ri:charging-pile-2-line" width="16" height="16" />
//         </span>
//         <p>Electric</p>
//       </div>
//       <div className="mt-6">
//         <p className="text-h3-mobile">$175,000</p>
//       </div>
//       <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
//         <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
//       </button>
//     </div>
//   </div>
//   <div className="">
//     <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
//       <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
//       <p className="text-text-color text-h4-mobile">Turbo 5</p>
//       <div className="flex items-end justify-end">
//         <img src={Porsche} alt="" className="w-[160px] mt-2" />
//       </div>
//       <div className="flex flex-row justify-between text-smaller-mobile w-[154px] mt-5">
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:dashboard-3-line" width="16" height="16" />
//           </span>
//           <p>3.7 Sec</p>
//         </div>
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:funds-box-line" width="16" height="16" />
//           </span>
//           <p>356 Km/h</p>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-center  text-smaller-mobile gap-1 mt-2">
//         <span>
//           <Icon icon="ri:charging-pile-2-line" width="16" height="16" />
//         </span>
//         <p>Electric</p>
//       </div>
//       <div className="mt-6">
//         <p className="text-h3-mobile">$175,000</p>
//       </div>
//       <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
//         <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
//       </button>
//     </div>
//   </div>
//   <div className="">
//     <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
//       <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
//       <p className="text-text-color text-h4-mobile">Turbo 5</p>
//       <div className="flex items-end justify-end">
//         <img src={Porsche} alt="" className="w-[160px] mt-2" />
//       </div>
//       <div className="flex flex-row justify-between text-smaller-mobile w-[154px] mt-5">
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:dashboard-3-line" width="16" height="16" />
//           </span>
//           <p>3.7 Sec</p>
//         </div>
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:funds-box-line" width="16" height="16" />
//           </span>
//           <p>356 Km/h</p>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-center  text-smaller-mobile gap-1 mt-2">
//         <span>
//           <Icon icon="ri:charging-pile-2-line" width="16" height="16" />
//         </span>
//         <p>Electric</p>
//       </div>
//       <div className="mt-6">
//         <p className="text-h3-mobile">$175,000</p>
//       </div>
//       <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
//         <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
//       </button>
//     </div>
//   </div>
//   <div className="">
//     <div className="relative bg-container-color  border-xl w-[228px] rounded-xl px-6 py-8">
//       <h2 className="text-h2-mobile text-titled-color">Porshe</h2>
//       <p className="text-text-color text-h4-mobile">Turbo 5</p>
//       <div className="flex items-end justify-end">
//         <img src={Porsche} alt="" className="w-[160px] mt-2" />
//       </div>
//       <div className="flex flex-row justify-between text-smaller-mobile w-[154px] mt-5">
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:dashboard-3-line" width="16" height="16" />
//           </span>
//           <p>3.7 Sec</p>
//         </div>
//         <div className="inline-flex items-center justify-center gap-1">
//           <span>
//             <Icon icon="ri:funds-box-line" width="16" height="16" />
//           </span>
//           <p>356 Km/h</p>
//         </div>
//       </div>
//       <div className="inline-flex items-center justify-center  text-smaller-mobile gap-1 mt-2">
//         <span>
//           <Icon icon="ri:charging-pile-2-line" width="16" height="16" />
//         </span>
//         <p>Electric</p>
//       </div>
//       <div className="mt-6">
//         <p className="text-h3-mobile">$175,000</p>
//       </div>
//       <button className="absolute  bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl">
//         <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
//       </button>
//     </div>
//   </div>

//   {/* </Slider> */}
// </div>
//   );
// };

// export default Carousel;


import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import Porsche from "../assets/images/popular1.png";
import Porsche2 from "../assets/images/popular2.png";
import Porsche3 from "../assets/images/popular3.png";
import Porsche4 from "../assets/images/popular4.png";
import Porsche5 from "../assets/images/popular5.png";
import './Carosal.css';

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const cars = [
    { id: 1, image: Porsche, name: "Porsche", time: "3.7 Sec", turbo: "Turbo 5", elec: "Electric", price: "$175000" },
    { id: 2, image: Porsche2, name: "Porsche", time: "3.7 Sec", turbo: "Turbo 5", elec: "Electric", price: "$175000" },
    { id: 3, image: Porsche3, name: "Porsche", time: "3.7 Sec", turbo: "Turbo 5", elec: "Electric", price: "$175000" },
    { id: 4, image: Porsche4, name: "Porsche", time: "3.7 Sec", turbo: "Turbo 5", elec: "Electric", price: "$175000" },
    { id: 5, image: Porsche5, name: "Porsche", time: "3.7 Sec", turbo: "Turbo 5", elec: "Electric", price: "$175000" },
  ];

  return (
    <div className="flex flex-col mx-auto mt-6 gap-4 pb-8">
      <div className="overflow-visible">
        <Slider {...settings}>
          {cars.map((car) => (
            <div
              key={car.id}
              className="border-xl rounded-xl px-2 py-8 flex items-center justify-center"
            >
              <div className="relative bg-container-color px-6 py-8 border-xl rounded-xl items-center flex flex-col justify-center">
                <h2 className="text-h2-mobile text-titled-color">{car.name}</h2>
                <p className="text-text-color text-h4-mobile">{car.turbo}</p>
                <div className="flex items-end justify-end">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-[240px] mt-2"
                  />
                </div>
                <div className="flex flex-row justify-between text-smaller-mobile w-[154px] mt-5">
                  <div className="inline-flex items-center justify-center gap-1">
                    <span>
                      <Icon icon="ri:dashboard-3-line" width="16" height="16" />
                    </span>
                    <p>{car.time}</p>
                  </div>
                  <div className="inline-flex items-center justify-center gap-1">
                    <span>
                      <Icon icon="ri:funds-box-line" width="16" height="16" />
                    </span>
                    <p>356 Km/h</p>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center text-smaller-mobile gap-1 mt-2">
                  <span>
                    <Icon icon="ri:charging-pile-2-line" width="16" height="16" />
                  </span>
                  <p>{car.elec}</p>
                </div>
                <div className="mt-6">
                  <p className="text-h3-mobile">{car.price}</p>
                </div>
                <button 
                  className="absolute bottom-0 right-0 bg-first-color text-white px-4 py-3 rounded-tl-xl rounded-br-xl" 
                  aria-label={`Add ${car.name} to cart`}
                >
                  <Icon icon="ri:shopping-bag-2-line" width="20" height="20" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
