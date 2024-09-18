import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Shorts from '../../components/Shorts'


const Movies = () => {
  const [videos, setVideos] = useState([])
  const [page, setPage] = useState(1)
  const [clips, setClips] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      const data = await res.json()
      setVideos(videos.concat(data))
      if (data.length < 10) {
        setPage(page)
      } else {
        setPage(page + 1)
      }
    }
    fetchVideos()
  }, [page])

  useEffect(() => {
    const fetchClips = async () => {
      const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=10`)
      const data = await res.json()
      setClips(data)
    }
    fetchClips()
  }, [])

  return (
    <div className="video-card-container flex flex-wrap justify-center gap-4 scroll-m-10">
      {videos.slice(0, 10).map( i => (
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
      <Shorts clips={clips} />
   
    </div>
  )
}

export default Movies


