import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Shorts = () => {
  const [shorts, setShorts] = useState([...Array(4).keys()])
  const [page, setPage] = useState(1)

  const loadMore = () => {
    setPage(page + 1)
    setShorts(shorts.concat([...Array(4).keys()].map(i => page * 4 + i)))
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <>
    <div className="shorts-icons inline-flex ml-4 mt-4 px-2" data-aos="fade-up">
      <i className="fa-solid fa-video text-3xl text-red-500"></i>
      <h1 className="text-3xl font-bold ml-2">Shorts</h1>
   
    </div>
    <div className="shorts-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 scroll-auto shadow-xl p-4" data-aos="fade-up">
      {shorts.map(i => (
        <div className="shorts-card p-2 hover:bg-gray-100 transition duration-300 ease-in-out" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
          <a href="#" className="shorts-link">
            <div className="shorts-thumbnail-container aspect-w-9 aspect-h-16">
              <img className="shorts-thumbnail w-full h-full object-cover" src={`https://picsum.photos/id/${i + 1}/300/540`} alt="" />
            </div>
            <div className="shorts-details p-2">
              <h1 className="shorts-title font-bold">Short {i + 1}</h1>
              <p className="shorts-description text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="shorts-info flex items-center gap-2">
                <span className="shorts-view-count text-sm">1.5M views</span>
                <span className="shorts-timestamp text-sm">1 year ago</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-center mt-4" data-aos="fade-up">
      <button className="bg-white hover:bg-red-100 text-black font-bold py-2 px-4 rounded" onClick={loadMore}>
        Load More
      </button>
    </div>
    </>
  )

}

export default Shorts


