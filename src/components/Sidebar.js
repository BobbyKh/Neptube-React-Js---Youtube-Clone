import React from 'react';

const Sidebar = ({ isSidebarOpen , closeSidebar }) => {
  return (
    <div className={` sidebar bg-white h-screen fixed top-0 left-0 p-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? '': 'translate-x-[-100%]'}`}>
      <div className="flex items-center justify-between">
        <i className="fa-solid fa-bars text-xl cursor-pointer " onClick={closeSidebar}></i>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src="logo.jpg" alt="" />
          <h1 className="text-3xl font-bold">Neptube</h1>
        </div>
      </div>
      <div className="links mt-4 text-center font-sans">
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-house"></i>
          Home
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-video"></i>
          Shorts
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-bell"></i>
          Subscription
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-clock"></i>
          History
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-clock-rotate-left"></i>
          Watch Later
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-thumbs-up"></i>
          Liked Videos
        </a>
        <a href="#" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300">
          <i className="fa-solid fa-gear"></i>
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
