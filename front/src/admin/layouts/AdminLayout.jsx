import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import API from "../api/axios";

import {
  LayoutDashboard,
  Phone,
  Image,
  Star,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
} from "lucide-react";
import { io } from "socket.io-client";



const handleLogout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
  window.location.replace("/admin/login");
};

const AdminLayout = ({ children }) => {

  const [notificationCount,setNotificationCount] = useState(0);
  const [notifications,setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [admin, setAdmin] = useState(() => JSON.parse(localStorage.getItem("adminUser")) || null);


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const notifRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Security: Check token on mount and handle Back/Forward cache (bfcache)
    const checkAuth = () => {
      if (!localStorage.getItem("adminToken")) {
        window.location.replace("/admin/login");
      }
    };
    
    const handlePageShow = (event) => {
      if (event.persisted) {
        checkAuth();
      }
    };

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) return;
        const response = await API.get("/admin/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.success) {
          setAdmin(response.data.admin);
          localStorage.setItem("adminUser", JSON.stringify(response.data.admin));
        }
      } catch (err) {
        console.log("Failed to fetch admin profile", err);
      }
    };

    checkAuth();
    fetchProfile();
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },

    {
      icon: <Phone size={20} />,
      label: "Leads",
      path: "/admin/leads",
    },

    {
      icon: <Image size={20} />,
      label: "Gallery",
      path: "/admin/gallery",
    },

    {
      icon: <Star size={20} />,
      label: "Testimonials",
      path: "/admin/testimonials",
    },

    {
      icon: <BarChart3 size={20} />,
      label: "Analytics",
      path: "/admin/analytics",
    },

    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await API.get("/leads?limit=5", {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const lastRead = localStorage.getItem("lastNotificationRead");
      
      const newLeads = response.data.leads.filter(
        lead => lead.status === "New"
      );
      
      const unreadCount = lastRead 
        ? newLeads.filter(lead => new Date(lead.createdAt) > new Date(lastRead)).length 
        : newLeads.length;

      setNotificationCount(unreadCount);
      setNotifications(newLeads.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotifications();

    // Initialize Socket.io Connection
    const socketUrl = import.meta.env.VITE_API_URL 
      ? import.meta.env.VITE_API_URL.replace("/api", "") 
      : "http://localhost:5000";
    
    const socket = io(socketUrl, { withCredentials: true });

    socket.on("new_lead", (data) => {
      // Play audio alert
      try {
        const audio = new Audio("/ding.mp3");
        audio.play().catch(e => console.log("Audio play blocked by browser:", e));
      } catch (err) {}

      setNotificationCount(prev => prev + 1);
      setNotifications(prev => [data.lead, ...prev].slice(0, 5));
    });

    // We can keep the interval as a fallback backup, but socket.io handles the real-time part
    const interval = setInterval(fetchNotifications, 60000); // Changed to 60s
    
    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setNotificationCount(0);
      localStorage.setItem("lastNotificationRead", new Date().toISOString());
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">

      {/* Mobile Toggle */}

      <button
        className="lg:hidden fixed top-5 left-5 z-[60] bg-white p-3 rounded-xl shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed top-0 left-0 h-full w-72
        bg-[#355B5E]
        text-white
        z-50
        transition-all duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="h-full flex flex-col">

          {/* Logo */}

          <div className="p-8 border-b border-white/10">

            <img
              src="/logo.png"
              alt="logo"
              className="w-24 mx-auto"
            />

            <h2 className="text-center font-semibold text-xl mt-5">

              Admin Dashboard

            </h2>

            <p className="text-center text-white/60 text-sm mt-2">

              The Nest Recovery Homes

            </p>

          </div>

          {/* Menu */}

          <div className="flex-1 overflow-y-auto p-5">

            <p className="text-white/50 uppercase text-xs mb-4 tracking-wider">

              Main Menu

            </p>

            <nav className="space-y-2">

              {menuItems.map((item, index) => {

                const isActive =
                  location.pathname === item.path;

                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`
                    flex items-center gap-4
                    px-4 py-4
                    rounded-2xl
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-[#355B5E] shadow-lg"
                        : "hover:bg-white/10"
                    }
                  `}
                  >
                    {item.icon}

                    <span className="font-medium">

                      {item.label}

                    </span>
                  </Link>
                );
              })}
            </nav>

            

          </div>

          {/* Logout */}

          <div className="p-5 border-t border-white/10">

          
            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 bg-red-500 py-4 rounded-2xl hover:bg-red-600 transition">
            Logout
            </button>
          </div>

        </div>

      </aside>

      {/* Main */}

      <div className="lg:ml-72">

        {/* Topbar */}

        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 px-6 lg:px-10 py-5">

          <div className="flex flex-col lg:flex-row justify-between gap-5">

            {/* Left */}

            <div>

              <h1 className="text-3xl font-bold text-[#355B5E]">

                Welcome Back 👋

              </h1>

              <p className="text-gray-500 mt-1">

                Manage your website and leads.

              </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

             
              {/* Notification */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={handleNotificationClick}
                  className="relative bg-[#F5F7F9] p-3 rounded-xl"
                >
                  <Bell size={20} />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center">
                      {notificationCount}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-14 w-[350px] bg-white rounded-2xl shadow-xl z-50 overflow-hidden">
                    <div className="p-4 border-b font-semibold">
                      Notifications
                    </div>
                    {notifications.length === 0 ? (
                      <div className="p-6 text-gray-500">No New Leads</div>
                    ) : (
                      notifications.map((lead) => (
                        <Link 
                          to="/admin/leads" 
                          key={lead._id} 
                          className="block p-4 border-b hover:bg-gray-50"
                          onClick={() => setShowNotifications(false)}
                        >
                          <h4 className="font-medium">{lead.fullName || lead.name || "Unknown"}</h4>
                          <p className="text-sm text-gray-500">{lead.phone}</p>
                          <p className="text-xs text-green-600 mt-1">New Lead</p>
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Profile */}

              <div className="flex items-center gap-3 bg-[#F5F7F9] px-4 py-2 rounded-2xl">

                <div>

                  <p className="font-medium">

                    {admin?.name}

                    </p>

                  <p className="text-xs text-gray-500">

                    Administrator

                  </p>

                </div>

                <div className="w-11 h-11 rounded-full bg-[#355B5E] text-white flex items-center justify-center font-bold">
                      {admin?.name?.charAt(0)}
                </div>

              </div>

            </div>

          </div>

        </header>

        {/* Content */}

        <main className="p-6 lg:p-10">

          {children}

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;