
import {
    BellDot,
    CheckCircle,
    ChevronRight,
    LogOut,
    Menu,
    Search,
    Settings,
    User,
  } from "lucide-react";
  import { useEffect, useRef, useState } from "react";
  import morilla from '../../src/assets/morilla.png'
  

  function Header({ sidebarOpen, setSidebarOpen }) {
    const [showSettings, setShowSettings] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [profileActions, setProfileActions] = useState(false);
  
    const settingsRef = useRef(null);
    const notificationsRef = useRef(null);
    const profileRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (settingsRef.current && !settingsRef.current.contains(event.target)) {
          setShowSettings(false);
        }
        if (
          notificationsRef.current &&
          !notificationsRef.current.contains(event.target)
        ) {
          setShowNotifications(false);
        }
  
        if (profileRef.current && !profileRef.current.contains(event.target)) {
          setProfileActions(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return (
      <header className="bg-[#FFFFFF] shadow-md p-2 h-[100px] max-h-20 flex justify-between items-center sticky top-0 w-full  z-10">
        <div className="w-full flex items-center md:items-start">
          <button
            className="md:hidden p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu color="#343C6A" size={24} />
          </button>
  
          <div className="w-full flex justify-center md:justify-start">
            <h2 className="font-semibold text-[28px] leading-normal text-[#343C6A] py-4">
              Overview
            </h2>
          </div>
        </div>
  
        <div className="flex items-center gap-[30px]">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718EBF]" />
            <input
              type="text"
              name="search"
              id=""
              className="bg-[#F5F7FA] rounded-[40px] py-4 pl-12 focus:outline-none focus:ring-2 focus:border-blue-700 text-base font-normal text-black h-12 "
              placeholder="Search for Something"
            />
          </div>
          <div className="items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full  hidden md:flex">
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                ref={settingsRef}
                className="flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full shadow-md hover:bg-gray-200 transition"
              >
                <Settings color="#718EBF" />
              </button>
              {showSettings && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 p-2 transition-opacity duration-200">
                  <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md w-full">
                    <User className="w-5 h-5 text-gray-600" />
                    <span>Profile</span>
                  </button>
                  <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md w-full">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Preferences</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full">
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full shadow-md hover:bg-gray-200 transition"
              >
                <BellDot color="#FE5C73" />
                {/* <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"></span> */}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-2 transition-opacity duration-200">
                  <div className="flex items-center justify-between px-2 pb-2 border-b">
                    <span className="font-semibold text-gray-700">
                      Notifications
                    </span>
                    <button className="text-blue-500 text-sm hover:underline">
                      Mark all as read
                    </button>
                  </div>
                  <div className="py-2 space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-md">
                      <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
                        JD
                      </div>
                      <div>
                        <p className="text-sm">John Doe commented on your post</p>
                        <span className="text-xs text-gray-500">2 mins ago</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
                      <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
                        AL
                      </div>
                      <div>
                        <p className="text-sm">Alice liked your post</p>
                        <span className="text-xs text-gray-500">10 mins ago</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-between p-2 text-blue-500 hover:bg-gray-100 rounded-md w-full">
                      <span>View all</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full">
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileActions(!showNotifications)}
                className="relative flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full shadow-md hover:bg-gray-200 transition"
              >
                <div className="relative z-40">
                  <img
                    src={morilla}
                    alt="img"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              </button>
              {profileActions && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 p-2 transition-opacity duration-200">
                  <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md w-full">
                    <User className="w-5 h-5 text-gray-600" />
                    <span>Profile</span>
                  </button>
  
                  <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md w-full">
                    <LogOut className="w-5 h-5 text-red-500" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;