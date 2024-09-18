import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Vlogs = () => {
  return (
    <div className='Vlogs flex flex-wrap justify-center p-4 gap-4'>
      {[...Array(10)].map((_,i) => (
        <div className='card w-64 bg-white shadow-md p-4 rounded-lg' data-aos="fade-up" data-aos-duration="1000" key={i}>
          <img src="https://picsum.photos/200/300" alt="" className='w-full h-40 object-cover rounded-t-lg' />
          <div className='flex justify-between items-center py-2 mt-2 gap-4'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-bold'>Episode Title</h3>
              <p className='text-sm text-gray-400'>By Vlogs Name</p>
            </div>
            <p className='text-sm text-gray-400'>1h ago</p>
          </div>
        </div>
      ))}

    </div>
  )
}

AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

export default Vlogs


