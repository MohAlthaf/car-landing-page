// import React from "react";
// import { Icon } from "@iconify/react";

// const Header = () => {
//   return (
//     <div className=" relative top-4 w-full px-6">
//       <div className="flex items-center justify-between">
//         <div className="inline-flex text-white gap-1">
//           <Icon
//             icon="ri:steering-fill"
//             width="20"
//             height="20"
//             className="text-white-color"
//           />
//           <span className="text-h4-mobile">Elecar</span>
//         </div>
//         <Icon icon="ri:menu-fill" width="20" height="20"  className="text-white-color" />
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header className="relative top-4 w-full px-6  lg:px-32 lg:top-8 text-white">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 ">
            <Icon
              icon="ri:steering-fill"
              width="20"
              height="20"
              className="text-white"
            />
            <span className="text-xl font-bold">Elecar</span>
          </div>
          <div className="hidden md:flex space-x-6 items-center lg:gap-6">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/popular" className="hover:text-gray-400">Popular</Link>
            <Link to="/featured" className="hover:text-gray-400">Featured</Link>
          </div>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <Icon icon="ri:menu-fill" width="20" height="20" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 text-white transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <Icon icon="ri:close-fill" width="24" height="24" />
          </button>
        </div>
        <nav className="flex flex-col items-center mt-16">
          <Link to="/" className="py-2 text-lg hover:text-gray-400" onClick={toggleSidebar}>Home</Link>
          <Link to="/about" className="py-2 text-lg hover:text-gray-400" onClick={toggleSidebar}>About</Link>
          <Link to="/popular" className="py-2 text-lg hover:text-gray-400" onClick={toggleSidebar}>Popular</Link>
          <Link to="/featured" className="py-2 text-lg hover:text-gray-400" onClick={toggleSidebar}>Featured</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
