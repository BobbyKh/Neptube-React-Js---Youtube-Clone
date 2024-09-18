import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mychannel = () => {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
      const data = await res.json();
      setVideos(data);   
    };

    fetchVideos();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="mychannel-container flex flex-col p-5">
      <div className="mychannel flex items-center  bg-white rounded-2xl p-4 border border-gray-300" >
        <div className="channel-image rounded-full overflow-hidden w-24 h-24 mr-4">
          <img
            src="https://picsum.photos/200/300"
            alt="channel image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="channel-info w-1/2">
          <h1 className="text-2xl font-bold" data-aos="fade-right">John TV</h1>
          <p className="text-gray-600" data-aos="fade-right">@johnDoe</p>

          <p className="text-gray-600" data-aos="fade-right">1000 suscribers</p>
          <p className="text-gray-600" data-aos="fade-right">This is a description of my channel</p>
        </div>
        <div className="channel-stats w-1/2 text-right">
          <p className="text-gray-600" data-aos="fade-left">100 videos</p>
          <p className="text-gray-600" data-aos="fade-left">1000 views</p>
        </div>
      </div>
      <div className="history mt-8">
        <h1 className="text-3xl font-bold" data-aos="zoom-in">History</h1>
        <div className="history-container flex flex-wrap justify-center gap-4 mt-4">
          {videos.map((video, i) => (
              <div key={i} className="video-card mt-1 bg-white rounded-2xl flex flex-col md:w-64 " data-aos="fade-up" data-aos-delay={(i % 2 === 0) ? 100 : 300}>
                <div className="thumbnail-container ">
                  <img className="thumbnail rounded-2xl w-[350px] h-[200px] object-cover" src={video.download_url} alt="" />
                </div>
                <div className="video-details pl-4">
                  <h1 className="title font-bold" data-aos="fade-right">{video.author}</h1>
                  <h2 className="channel" data-aos="fade-left">{video.url}</h2>
                  <p className="views" data-aos="fade-up">{video.width} x {video.height}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mychannel;

