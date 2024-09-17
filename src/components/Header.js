import React from "react";

const Header = ({ openSidebar,openDropdown,isDropdownOpen,closeDropdown ,children}) => {
  return (
    <div className="header bg-white flex justify-between items-center px-2 shadow-md mt-2 relative">
      <div className="logo-container flex items-center ">
        <i className="fa-solid fa-bars " onClick={openSidebar}></i>

        <img className="logo mr-2 w-10 h-10" src="logo.jpg" alt="" />
        <h1 className="text-2xl font-bold hidden md:block">Neptube</h1>
      </div>

      <div className="search-container flex items-center bg-white rounded-lg shadow-md p-2 py-2 w-full md:w-1/3">
        <input
          className="search flex-1 bg-transparent outline-none  "
          type="text"
          placeholder="Search"
        />
        <i className="fa fa-search search-btn bg-white px-4 py-2 rounded-lg ml-2"></i>
      </div>

      <div className="video-notification-container flex items-center">
        <i className="fa-solid fa-video text-xl mr-4 px-4 "></i>
        <i className="fa-solid fa-bell text-xl mr-4 px-4 "></i>
        <img
          className="profile rounded-full w-10 h-10 "
          src="profile.jpg"
          alt=""
          onClick={isDropdownOpen ? closeDropdown : openDropdown}
        />
      </div>

   {children}
    </div>
    
  );
};

export default Header;

