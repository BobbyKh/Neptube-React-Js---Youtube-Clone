import React from "react";

const Card = () => (
  <div className="video-card-container flex flex-wrap justify-center gap-4 scroll-m-10">
    {[...Array(10).keys()].map(i => (
      <div className="video-card mt-1 bg-white rounded-2xl flex flex-col md:w-64 " key={i}>
        <div className="thumbnail-container ">
          <img className="thumbnail rounded-2xl w-[350px] h-[200px] object-cover" src={`https://picsum.photos/id/${i + 1}/350/200`} alt="" />
        </div>
        <div className="video-details pl-4">
          <h1 className="title font-bold">React Context API Tutorial - 2023</h1>
          <h2 className="channel">The Net Ninja</h2>
          <p className="views">{(i + 1) * 100000 > 1000 ? `${((i + 1) * 100000) / 1000}k` : (i + 1) * 100000} views</p>
        </div>
      </div>
    ))}
  </div>
);

export default Card;
