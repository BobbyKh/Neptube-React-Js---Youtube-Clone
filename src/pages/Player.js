import React from 'react'

const Player = () => {
  return (
    <>
    <div className="video-player">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/3tmd-ClpJxA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-details flex flex-col px-4  ">
      <h1 className="title font-bold text-4xl">React Context API Tutorial - 2023</h1>
      <div className="flex items-center gap-2">
        <img className="profile rounded-full w-10 h-10" src="profile.jpg" alt="" />
        <h2 className="channel text-2xl ">The Net Ninja</h2>
      
        <button className="subscribe-btn bg-black px-4 py-1 rounded-lg text-white font-bold">Subscribe</button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500">
          <i className="fa-solid fa-thumbs-up"></i>
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500">
          <i className="fa-solid fa-share"></i>
          <span>Share</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500">
          <i className="fa-solid fa-arrow-down"></i>
          <span>Download</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <div className="flex items-center gap-2 ml-5 p-x">
        <p className="text-sm text-gray-500">1.5M subscribers</p>
      </div>

      <div className="description mt-2 flex flex-col bg-slate-100 p-4 rounded-xl ">
        <div className="flex items-center gap-2">
          <p className='views font-bold' >1.5M views</p> 
          <p className='date text-gray-500 font-bold'>3 days ago</p>
        </div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos.
          <span className="hidden description-more">
            Quibusdam, quod, quidem, quae, quas, quia, quum, quos, quod, quid, quae, quas, quia, quum, quos.
          </span>
          <span className="description-link text-blue-500 cursor-pointer" onClick={(e) => {
            const description = e.target.parentElement;
            const descriptionMore = description.querySelector('.description-more');
            if (descriptionMore.classList.contains('hidden')) {
              descriptionMore.classList.remove('hidden');
              e.target.innerText = 'Show Less';
            } else {
              descriptionMore.classList.add('hidden');
              e.target.innerText = 'Show More';
            }
          }}>Show More</span>
        </p>
      </div>
    </div>

    </>
   )

}

export default Player