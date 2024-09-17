import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProfileDropdown from './components/ProfileDropdown';
import Home from './pages/Home';
import Preloader from './components/Preloader';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
      <Header
        openSidebar={openSidebar}
        openDropdown={openDropdown}
        isDropdownOpen={isDropdownOpen}
        closeDropdown={closeDropdown}
      >
          {isLoading && <Preloader />}
      </Header>
    
      <Navbar />
      <ProfileDropdown isDropdownOpen={isDropdownOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Home>
        <Card />
      </Home>


    </div>
  );
};

export default App;

