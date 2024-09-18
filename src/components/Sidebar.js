import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <Link to="/" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
          <i className="fa-solid fa-house"></i>
          Home
        </Link>
        <Link to="/shorts" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
          <i className="fa-solid fa-video"></i>
          Shorts
        </Link>
        <Link to="/subscriptions" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
          <i className="fa-solid fa-bell"></i>
          Subscription
        </Link>
        <Link to="/history" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="400">
          <i className="fa-solid fa-clock"></i>
          History
        </Link>
        <Link to="/watchlater" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
          <i className="fa-solid fa-clock-rotate-left"></i>
          Watch Later
        </Link>
        <Link to="/likedvideos" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="600">
          <i className="fa-solid fa-thumbs-up"></i>
          Liked Videos
        </Link>
        <Link to="/mychannel" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="700">
          <i className="fa-solid fa-link"></i>
          My Channel
        </Link>
        <Link to="/settings" className="flex items-center gap-2  px-4 py-2 text-lg hover:bg-gray-300" data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">
          <i className="fa-solid fa-gear"></i>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
