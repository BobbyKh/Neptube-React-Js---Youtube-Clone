import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white flex justify-center overflow-x-auto mt-2 mb-2">
      <button
        type="button"
        className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
      >
        All
      </button>
      <button
        type="button"
        className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
      >
        Music
      </button>
      <button
        type="button"
        className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
      >
        Movies
      </button>
      <button
        type="button"
        className="shadow-md  bg-slate-100 px-2 py-1 rounded-lg mx-2"
      >
        Gaming
      </button>
    </div>
  );
};

export default Navbar;

