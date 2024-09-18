import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Shorts from '../components/Shorts'
const Suscriptions = () => {
  const [videos, setVideos] = useState([...Array(10).keys()])
  const [showLoadMore, setShowLoadMore] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  const loadMore = () => {
    setVideos([...videos, ...Array(10).keys(videos.length)])
    if (videos.length >= 50) {
      setShowLoadMore(false)
    }
  }

  return (
    <>
      <header className="shorts-icons inline-flex ml-4 mt-4 px-2" data-aos="fade-up">
      <i className="fa-solid fa-video text-3xl text-red-500"></i>
      <h1 className="text-3xl font-bold ml-2">Suscribed</h1>

    </header>
    <div className="video-card-container flex flex-wrap justify-center gap-4 scroll-m-10" data-aos="fade-up">
  
      {videos.map(i => (
      <Link to="/player" key={i} data-aos="fade-up">
        <div className="video-card mt-1 bg-white rounded-2xl flex flex-col md:w-64 ">
          <div className="thumbnail-container ">
            <img className="thumbnail rounded-2xl w-[350px] h-[200px] object-cover" src={`https://picsum.photos/id/${i + 1}/350/200`} alt="" />
          </div>
          <div className="video-details pl-4">
            <h1 className="title font-bold">React Context API Tutorial - 2023</h1>
            <h2 className="channel">The Net Ninja</h2>
            <p className="views">{(i + 1) * 100000 > 1000 ? `${((i + 1) * 100000) / 1000}k` : (i + 1) * 100000} views</p>
          </div>
        </div>
      </Link>
      ))}
    </div>
    {showLoadMore && (
      <div className="flex justify-center mt-4" data-aos="fade-up">
        <button className="bg-white border border-gray-300 hover:bg-red-100 text-gray-700 font-bold py-2 px-4 rounded" onClick={loadMore}>
          Load more
        </button>
      </div>
    )}
    <Shorts/>
    </>
  )
}

export default Suscriptions

