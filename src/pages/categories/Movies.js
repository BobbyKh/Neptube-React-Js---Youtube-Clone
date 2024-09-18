import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../components/Preloader'


const Movies = () => {
  const [videos, setVideos] = useState([])
  const [showLoadMore, setShowLoadMore] = React.useState(false)
  const [page, setPage] = React.useState(1)

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      const data = await res.json()
      setVideos(videos.concat(data))
      if (data.length < 10) {
        setShowLoadMore(false)
      } else {
        setPage(page + 1)
      }
    }
    fetchVideos()
  }, [page])

  const loadMore = () => {
    setShowLoadMore(true)
  }

  return (
    <div className="video-card-container flex flex-wrap justify-center gap-4 scroll-m-10">
      {videos.map(i => (
        <Link to={`/player/${i.id}`} key={i.id} data-aos="fade-up" data-aos-duration="1000">
          <div className="video-card mt-1 bg-white rounded-2xl flex flex-col md:w-64">
            <div className="thumbnail-container">
              <img className="thumbnail rounded-2xl w-[350px] h-[200px] object-cover" src={`https://picsum.photos/id/${i.id}/350/200`} alt={i.title} />
            </div>
            <div className="video-details pl-4">
              <h1 className="title font-bold">{i.title}</h1>
              <h2 className="channel">{i.author}</h2>
              <p className="views">{i.views > 1000 ? `${i.views / 1000}k` : i.views} views</p>
            </div>
          </div>
        </Link>
      ))}
      {showLoadMore && (
        <div className="flex justify-center mt-4">
          <button className="bg-white border border-gray-300 hover:bg-red-100 text-gray-700 font-bold py-2 px-4 rounded" onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  )
}

export default Movies


