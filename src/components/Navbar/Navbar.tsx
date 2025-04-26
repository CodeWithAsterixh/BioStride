import { AlignRight, Calendar, CreditCard, EllipsisVertical, Home, MessageSquare, Settings, User, X, } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOpenPeopleList } from './../../utils/useOpenPeopleList';
import ThemeToggler from "../themeToggler/ThemeToggler";

const linkClasses =
  "flex items-center font-semibold space-x-2 relative group";

const Navbar: React.FC = () => {
  const {sidebarOpen, setSidebarOpen} = useOpenPeopleList();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const iconClass = "lg:size-[1.2rem] xl:size-[1.5rem]"
  const navLinks = [
    { to: "/", label: "Overview", icon: <Home className={iconClass}/> },
    { to: "/patients", label: "Patients", icon: <User className={iconClass}/> },
    { to: "/schedule", label: "Schedule", icon: <Calendar className={iconClass} /> },
    { to: "/messages", label: "Messages", icon: <MessageSquare className={iconClass}/> },
    { to: "/transactions", label: "Transactions", icon: <CreditCard className={iconClass} /> },
  ];

  return (
    <header className="z-[100] duration-300 w-full lg:px-5 lg:py-4 bg-[#f2f8fc] dark:bg-transparent">
      {/* Desktop Menu */}
      <nav className="py-2 md:py-2 lg:py-0 bg-white dark:bg-darkComponentsBg shadow-lg md:shadow-sm backdrop-blur-md w-full lg:rounded-full overflow-hidden">
        <div className="px-4 lg:px-9 flex justify-between items-center w-full">
          <header className="flex items-center dark:text-white text-2xl lg:text-3xl xl:text-[1.7rem] font-bold">
            <span className="text-primary">B</span>io<span className="text-primary">S</span>tride
          </header>

          <ul className="hidden lg:flex items-center space-x-3 h-[4rem] text-[1rem] lg:text-[0.80rem] xl:text-[1rem] text-gray-600 dark:text-[#56bbe3]">
            {navLinks.map((link) => (
              <li key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className={`${

                    location.pathname === '/' && link.to==='/'?`${linkClasses} bg-[#56bbe3] text-white px-4 py-2 rounded-full flex items-end gap-2`:
                    location.pathname.includes(link.to)&&link.to!=='/'
                      ? `${linkClasses} bg-[#56bbe3] text-white px-4 py-2 rounded-full flex items-end gap-2`

                      : `${linkClasses} px-4 py-2 flex items-end gap-2`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>   

          <div className="hidden lg:flex items-center justify-center gap-2">
            <ThemeToggler/>
            <div className="w-auto h-auto flex items-center justify-center bg-white dark:bg-transparent rounded-full shadow-lg border-2 border-[#56bbe3] p-1 ml-2">
              <div className="user-image-container w-[2.3rem] h-[2.3rem] flex items-center justify-center bg-white rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-left flex flex-col text-sm text-gray-600 dark:text-[#56bbe3] lg:hidden xl:block">
              <b className="">Victor Movicx</b>
              <p className="dark:text-gray-400">General Practitioner</p>
            </div>
            <span className="w-[0.2rem] h-[2.1rem] bg-gray-100 dark:bg-gray-500 rounded-full text-gray-100 dark:text-gray-500 mx-1">.</span>
            <section className="flex items-center gap-2 dark:text-[#56bbe3]">
              <Settings />
              <EllipsisVertical />
            </section>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="lg:hidden text-gray-500 dark:text-[#56bbe3]">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X className="w-8 h-8" /> : <AlignRight className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="w-screen h-screen bg-black/20 fixed inset-0 left-0 -z-[90]"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-90 transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden w-3/4 max-w-sm bg-white dark:bg-darkComponentsBg backdrop-blur-md rounded-lg shadow-full`}
      >
        <nav className="pl-3 flex flex-col justify-between h-full gap-1 w-full">
          <div className="text-2xl font-bold h-[4rem] flex items-center justify-between pt-1 dark:text-white pr-3">
            <header className="flex items-center text-2xl font-bold">
                <span className="text-[#56bbe3]">B</span>io<span className="text-[#56bbe3]">S</span>tride
            </header>
            <ThemeToggler/>
          </div>
          <ul className="flex flex-col items-start justify-start w-full h-full space-y-3 gap-1 border-r-2 border-gray-400 dark:border-gray-600 pt-3 pb-9 pr-2 text-[1rem] text-gray-600 dark:text-[#56bbe3]">
            {navLinks.map((link) => (
              <li key={link.to} className="w-full rounded-r-lg overflow-hidden">
                <Link
                  to={link.to}
                  className={`${
                    location.pathname === '/' && link.to==='/'?`${linkClasses} bg-[#56bbe3] text-white px-1 py-2 rounded w-full flex gap-2`:
                    location.pathname.includes(link.to)&&link.to!=='/'
                      ? `${linkClasses} bg-[#56bbe3] text-white px-1 py-2 rounded w-full flex gap-2`
                      : `${linkClasses} flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 px-1 py-2 w-full`
                  }`}
                  onClick={() => {
                    setIsOpen(false); // Close the navigation menu
                    if (link.to === '/patients') {
                      setSidebarOpen(sidebarOpen ? false : true);
                    }
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <section className="flex items-center justify-between w-full h-full max-h-[5rem] border-r-2 border-gray-400 dark:border-gray-600 pr-1">
            <div className="w-auto h-auto flex items-center justify-center bg-white dark:bg-transparent rounded-full shadow-lg border-2 border-[#56bbe3] p-1">
                <div className="user-image-container w-[2.3rem] h-[2.3rem] flex items-center justify-center bg-white rounded-full overflow-hidden">
                    <img 
                    src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="logo" 
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="text-left flex flex-col text-sm text-gray-600 dark:text-[#56bbe3]">
                <b className="">Victor Movicx</b>
                <p className="dark:text-gray-400">General Practitioner</p>
            </div>
            <span className="w-[0.2rem] h-[2.1rem] bg-gray-100 dark:bg-gray-600 rounded-full text-gray-100 dark:text-gray-600 mx-1">.</span>
            <section className="flex items-center dark:text-[#56bbe3] text-gray-600 hover:text-gray-800 dark:hover:text-gray-400 transition-all duration-300 ease-in-out">
                <Settings />
                <EllipsisVertical />
            </section>  
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
