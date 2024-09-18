import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Preloader = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="preloader h-1 bg-red-500 absolute bottom-0 left-0 right-0 animate-pulse "
    ></div>
  )
}

AOS.init()

export default Preloader
