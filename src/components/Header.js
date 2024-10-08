import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  openSidebar,
  openDropdown,
  isDropdownOpen,
  closeDropdown,
  children,
}) => {
  return (
    <>
      <div className="header bg-white flex justify-between items-center px-2 shadow-md mt-2 relative">
        <div className="logo-container flex items-center ">
          <i className="fa-solid fa-bars text-3xl hover:cursor-pointer" onClick={openSidebar}></i>

          <Link to="/">
            <img className="logo mr-2 w-10 h-10 " src="logo.jpg" alt="" />{" "}
          </Link>
          <h1 className="text-2xl font-bold ">Neptube</h1>
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
          <Link to="/live">
            <i class="fa-solid fa-headset text-xl mr-4 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer " title="Go Live  "></i>
          </Link>
          <Link to="/upload">
            <i className="fa-solid fa-video text-xl mr-4 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer " title="Upload Video"></i>
          </Link>
          <i className="fa-solid fa-bell text-xl mr-4 px-4 hover:bg-gray-200 rounded-full hover:cursor-pointer " title="Notifications"></i>
          <img
            className="profile rounded-full w-10 h-10 "
            src="profile.jpg"
            alt=""
            onClick={isDropdownOpen ? closeDropdown : openDropdown}
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
