import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdChat, MdMenu, MdClose, MdLightMode, MdDarkMode, MdSchedule, MdTrendingUp } from 'react-icons/md';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';
import { HiSparkles } from 'react-icons/hi2';
import { BiStats } from 'react-icons/bi';
import { RiLink } from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-[#111b21]' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} ${theme === 'dark' ? 'bg-[#202c33] border-[#2a3942]' : 'bg-white border-gray-200'} border-r transition-all duration-300`}>
        <div className={`p-4 flex items-center justify-between ${theme === 'dark' ? 'border-[#2a3942]' : 'border-gray-200'} border-b`}>
          {sidebarOpen && <h2 className="text-xl font-bold text-[#00a884]">AI Agent</h2>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`p-2 ${theme === 'dark' ? 'hover:bg-[#2a3942]' : 'hover:bg-gray-100'} rounded-lg`}>
            {sidebarOpen ? <MdClose size={20} className={theme === 'dark' ? 'text-[#aebac1]' : 'text-gray-600'} /> : <MdMenu size={20} className={theme === 'dark' ? 'text-[#aebac1]' : 'text-gray-600'} />}
          </button>
        </div>
        <nav className="mt-2 px-2">
          <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/dashboard') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MdDashboard size={24} />
            {sidebarOpen && <span className="font-medium">Dashboard</span>}
          </Link>
          <Link to="/" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MdChat size={24} />
            {sidebarOpen && <span className="font-medium">AI Chat</span>}
          </Link>
          <Link to="/statistics" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/statistics') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <BiStats size={24} />
            {sidebarOpen && <span className="font-medium">Statistics</span>}
          </Link>
          <Link to="/connections" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/connections') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <RiLink size={24} />
            {sidebarOpen && <span className="font-medium">Connections</span>}
          </Link>
          
          {sidebarOpen && <div className={`px-4 py-2 mt-4 mb-2 text-xs font-semibold ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'}`}>AI TOOLS</div>}
          
          <Link to="/ai-content" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/ai-content') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <HiSparkles size={24} />
            {sidebarOpen && <span className="font-medium">AI Content</span>}
          </Link>
          <Link to="/ai-scheduler" className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${isActive('/ai-scheduler') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MdSchedule size={24} />
            {sidebarOpen && <span className="font-medium">AI Scheduler</span>}
          </Link>
          <Link to="/ai-trends" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive('/ai-trends') ? theme === 'dark' ? 'bg-[#2a3942] text-[#00a884]' : 'bg-[#e7f5ec] text-[#00a884]' : theme === 'dark' ? 'text-[#aebac1] hover:bg-[#2a3942]' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MdTrendingUp size={24} />
            {sidebarOpen && <span className="font-medium">AI Trends</span>}
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className={`${theme === 'dark' ? 'bg-[#202c33] border-[#2a3942]' : 'bg-white border-gray-200'} border-b px-6 py-3 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center shadow-lg">
              <HiSparkles className="text-white text-xl" />
            </div>
            <h1 className={`text-lg font-semibold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>Social Media AI Agent</h1>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className={`p-2 ${theme === 'dark' ? 'hover:bg-[#2a3942]' : 'hover:bg-gray-100'} rounded-lg`}>
              {theme === 'dark' ? <MdLightMode size={20} className="text-[#aebac1]" /> : <MdDarkMode size={20} className="text-gray-600" />}
            </button>

            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className={`flex items-center gap-3 ${theme === 'dark' ? 'hover:bg-[#2a3942]' : 'hover:bg-gray-100'} rounded-lg px-3 py-2`}>
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white font-semibold">J</div>
                <span className={`font-medium ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-700'}`}>John Doe</span>
                <IoChevronDown className={theme === 'dark' ? 'text-[#aebac1]' : 'text-gray-400'} />
              </button>

              {showDropdown && (
                <div className={`absolute right-0 mt-2 w-56 ${theme === 'dark' ? 'bg-[#202c33] border-[#2a3942]' : 'bg-white border-gray-200'} rounded-lg shadow-xl border py-2 z-10`}>
                  <Link to="/profile" className={`flex items-center gap-3 px-4 py-3 ${theme === 'dark' ? 'hover:bg-[#2a3942] text-[#e9edef]' : 'hover:bg-gray-50 text-gray-700'}`} onClick={() => setShowDropdown(false)}>
                    <FiUser className={theme === 'dark' ? 'text-[#aebac1]' : 'text-gray-600'} />
                    <span className="font-medium">Profile</span>
                  </Link>
                  <div className={`${theme === 'dark' ? 'border-[#2a3942]' : 'border-gray-200'} border-t my-1`}></div>
                  <button onClick={() => console.log('Logout')} className={`w-full flex items-center gap-3 px-4 py-3 ${theme === 'dark' ? 'hover:bg-[#2a3942]' : 'hover:bg-red-50'} text-red-500`}>
                    <FiLogOut />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
