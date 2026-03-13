import { useTheme } from '../context/ThemeContext';
import { MdAutoAwesome } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi2';
import { MdTrendingUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { theme } = useTheme();
  
  const aiRecommendations = [
    { icon: '🚀', title: 'Post Now for Maximum Reach', desc: 'Current time is optimal for Instagram engagement', action: 'Schedule Post', link: '/ai-scheduler' },
    { icon: '💡', title: 'Trending Topic Alert', desc: 'AI & Automation is trending in your niche', action: 'Create Content', link: '/ai-content' },
    { icon: '📈', title: 'Engagement Opportunity', desc: 'Your audience is 40% more active right now', action: 'View Insights', link: '/statistics' },
  ];
  
  const stats = [
    { label: 'Total Chats', value: '24', icon: '💬' },
    { label: 'Active Users', value: '1.2K', icon: '👥' },
    { label: 'Messages', value: '5.4K', icon: '📨' },
    { label: 'Uptime', value: '99.9%', icon: '⚡' },
  ];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>Dashboard</h1>
        
        {/* AI Recommendations Banner */}
        <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-[#00a884] to-[#06cf9c]' : 'bg-gradient-to-r from-[#00a884] to-[#06cf9c]'} p-6 rounded-lg shadow-lg mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <HiSparkles className="text-white text-3xl" />
            <h2 className="text-2xl font-bold text-white">AI Recommendations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiRecommendations.map((rec, idx) => (
              <Link key={idx} to={rec.link} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all">
                <div className="text-3xl mb-2">{rec.icon}</div>
                <h3 className="font-bold text-white mb-1">{rec.title}</h3>
                <p className="text-white/80 text-sm mb-3">{rec.desc}</p>
                <span className="text-white text-sm font-semibold">{rec.action} →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link to="/ai-content" className={`${theme === 'dark' ? 'bg-[#202c33] hover:bg-[#2a3942]' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow transition-all`}>
            <HiSparkles className="text-[#00a884] text-3xl mb-3" />
            <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>AI Content Generator</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>Create captions, hashtags, and scripts with AI</p>
          </Link>
          <Link to="/ai-scheduler" className={`${theme === 'dark' ? 'bg-[#202c33] hover:bg-[#2a3942]' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow transition-all`}>
            <MdAutoAwesome className="text-[#00a884] text-3xl mb-3" />
            <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>Smart Scheduler</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>AI picks the best time to post your content</p>
          </Link>
          <Link to="/ai-trends" className={`${theme === 'dark' ? 'bg-[#202c33] hover:bg-[#2a3942]' : 'bg-white hover:bg-gray-50'} p-6 rounded-lg shadow transition-all`}>
            <MdTrendingUp className="text-[#00a884] text-3xl mb-3" />
            <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>Trend Detector</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>Discover trending topics and viral opportunities</p>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>{stat.label}</p>
                  <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{stat.value}</p>
                </div>
                <span className="text-4xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} rounded-lg shadow p-6`}>
          <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>Recent Activity</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`flex items-center gap-3 p-3 ${theme === 'dark' ? 'hover:bg-[#2a3942]' : 'hover:bg-gray-50'} rounded`}>
                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>User {i} started a chat</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'}`}>{i} minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
