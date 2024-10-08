import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shorts from "./Shorts";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  const [videos, setVideos] = useState([...Array(10).keys()]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMore = () => {
    setVideos([...videos, ...Array(10).keys(videos.length)]);
    if (videos.length >= 50) {
      setShowLoadMore(false);
    }
  };

  AOS.init();

  return (
    <>
    <div className="video-card-container flex flex-wrap justify-center gap-4 scroll-m-10">
      {videos.map(i => (
      <Link to="/player">
        <div className="video-card mt-1 bg-white rounded-2xl flex flex-col md:w-64 " key={i} data-aos="fade-up" data-aos-duration="1000">
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
      <div className="flex justify-center mt-4">
        <button className="bg-white border border-gray-300 hover:bg-red-100 text-gray-700 font-bold py-2 px-4 rounded" onClick={loadMore}>
          Load more
        </button>
      </div>
    )}
    <Shorts/>
    </>
  );
};

export default Card;


