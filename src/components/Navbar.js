import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  return (
    <div className="navbar bg-white flex justify-center overflow-x-auto mt-2 mb-2" data-aos="fade-in" data-aos-duration="1000">
      <Link to="/">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-house mr-2"></i>
          Home
        </button>
      </Link>
      <Link to="/music">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-music mr-2"></i>
          Music
        </button>
      </Link>
      <Link to="/movies">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-film mr-2"></i>
          Movies
        </button>
      </Link>
      <Link to="/gaming">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-gamepad mr-2"></i>
          Gaming
        </button>
      </Link>
      <Link to="/spotify">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-headphones mr-2"></i>
          Spotify
        </button>
      </Link>
      <Link to="/vlogs">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-vr-cardboard mr-2"></i>
          Vlogs
        </button>
      </Link>
      <Link to="/podcast">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-podcast mr-2"></i>
          Podcast
        </button>
      </Link>
      <Link to="/live">
        <button
          type="button"
          className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
        >
          <i className="fa-solid fa-circle-play mr-2"></i>
          Live
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

