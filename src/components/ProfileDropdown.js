import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ProfileDropdown = ({isDropdownOpen  }) => {

  return (
    <div  className={`${isDropdownOpen ? "bg-white shadow-md rounded-lg p-4 absolute top-16 right-4" : "hidden"}`}>
      <div className="flex items-center gap-2 border-b border-gray-300 pb-4 " >
        <img className="w-10 h-10 rounded-full"  src="profile.jpg" alt=""/>
        <div>
          <h1 className="text-lg font-bold">John Doe</h1>
          <p className="text-sm text-gray-500">john.doe@example.com</p>
        </div>
      </div>
      <ul className="mt-4">
        <li className="py-2">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
            <i className="fa-solid fa-user"></i>
            Profile
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
            <i className="fa-solid fa-gear"></i>
            Settings
          </a>
        </li>
        <li className="py-2 border-t border-gray-300">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

AOS.init()

export default ProfileDropdown
