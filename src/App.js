import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Upload from "./pages/Upload";
import Sidebar from "./components/Sidebar";
import ProfileDropdown from "./components/ProfileDropdown";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import Player from "./pages/Player";
import Shorts from "./components/Shorts";
import Suscriptions from "./pages/Suscriptions";
import Mychannel from "./pages/Mychannel";
import Navbar from "./components/Navbar";
import Gaming from "./pages/categories/Gaming";
import Movies from "./pages/categories/Movies";
import Music from "./pages/categories/Music";
import Podcast from "./pages/categories/Podcast";
import Vlogs from "./pages/categories/Vlogs";
import Live from "./pages/categories/Live";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="App">
  
        <>
          <Header
            openSidebar={openSidebar}
            openDropdown={openDropdown}
            isDropdownOpen={isDropdownOpen}
            closeDropdown={closeDropdown}
          >

            <Preloader isLoading={isLoading} />

          </Header>
        
          <ProfileDropdown isDropdownOpen={isDropdownOpen} />
          <Navbar />
          <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <Home>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/player" element={<Player />} />
            <Route path ="/upload" element={<Upload />} />
            <Route path ="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Suscriptions />} />
            <Route path ="/mychannel" element={<Mychannel />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/music" element={<Music />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/live" element={<Live />} />
            
          </Routes>
          </Home>
          </>

    </div>
  );
};

export default App;

