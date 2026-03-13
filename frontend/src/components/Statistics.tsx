import { useTheme } from '../context/ThemeContext';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { MdAutoAwesome } from 'react-icons/md';

export default function Statistics() {
  const { theme } = useTheme();
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const platformData = {
    twitter: {
      name: 'Twitter/X',
      icon: '𝕏',
      color: '#000000',
      followers: '45.2K',
      engagement: '8.9K',
      engagementRate: '5.2%',
      weeklyData: [
        { date: 'Mon', likes: 320, retweets: 145, replies: 89 },
        { date: 'Tue', likes: 450, retweets: 198, replies: 112 },
        { date: 'Wed', likes: 380, retweets: 167, replies: 95 },
        { date: 'Thu', likes: 520, retweets: 234, replies: 134 },
        { date: 'Fri', likes: 680, retweets: 312, replies: 178 },
        { date: 'Sat', likes: 420, retweets: 189, replies: 98 },
        { date: 'Sun', likes: 390, retweets: 176, replies: 87 },
      ],
      topPosts: [
        { title: 'Product Launch Tweet', engagement: 1250 },
        { title: 'Industry Insights Thread', engagement: 980 },
        { title: 'Customer Success Story', engagement: 850 },
      ]
    },
    instagram: {
      name: 'Instagram',
      icon: '📷',
      color: '#E4405F',
      followers: '128K',
      engagement: '15.6K',
      engagementRate: '6.8%',
      weeklyData: [
        { date: 'Mon', likes: 1200, comments: 145, shares: 89 },
        { date: 'Tue', likes: 1450, comments: 198, shares: 112 },
        { date: 'Wed', likes: 1380, comments: 167, shares: 95 },
        { date: 'Thu', likes: 1620, comments: 234, shares: 134 },
        { date: 'Fri', likes: 1880, comments: 312, shares: 178 },
        { date: 'Sat', likes: 2100, comments: 389, shares: 198 },
        { date: 'Sun', likes: 1890, comments: 276, shares: 167 },
      ],
      topPosts: [
        { title: 'Product Showcase Reel', engagement: 3450 },
        { title: 'Behind the Scenes', engagement: 2890 },
        { title: 'User Generated Content', engagement: 2340 },
      ]
    },
    facebook: {
      name: 'Facebook',
      icon: '👍',
      color: '#1877F2',
      followers: '89.5K',
      engagement: '12.3K',
      engagementRate: '4.9%',
      weeklyData: [
        { date: 'Mon', likes: 890, comments: 234, shares: 145 },
        { date: 'Tue', likes: 1050, comments: 298, shares: 189 },
        { date: 'Wed', likes: 920, comments: 256, shares: 167 },
        { date: 'Thu', likes: 1180, comments: 334, shares: 212 },
        { date: 'Fri', likes: 1420, comments: 412, shares: 278 },
        { date: 'Sat', likes: 980, comments: 289, shares: 198 },
        { date: 'Sun', likes: 890, comments: 245, shares: 176 },
      ],
      topPosts: [
        { title: 'Community Event Post', engagement: 2150 },
        { title: 'Product Demo Video', engagement: 1890 },
        { title: 'Customer Testimonial', engagement: 1640 },
      ]
    },
    linkedin: {
      name: 'LinkedIn',
      icon: '💼',
      color: '#0A66C2',
      followers: '34.8K',
      engagement: '5.2K',
      engagementRate: '7.1%',
      weeklyData: [
        { date: 'Mon', likes: 420, comments: 89, shares: 56 },
        { date: 'Tue', likes: 580, comments: 134, shares: 78 },
        { date: 'Wed', likes: 520, comments: 112, shares: 67 },
        { date: 'Thu', likes: 680, comments: 156, shares: 89 },
        { date: 'Fri', likes: 520, comments: 123, shares: 71 },
        { date: 'Sat', likes: 280, comments: 45, shares: 23 },
        { date: 'Sun', likes: 240, comments: 38, shares: 19 },
      ],
      topPosts: [
        { title: 'Industry Thought Leadership', engagement: 1450 },
        { title: 'Company Milestone', engagement: 1180 },
        { title: 'Career Tips Article', engagement: 980 },
      ]
    },
    tiktok: {
      name: 'TikTok',
      icon: '🎵',
      color: '#000000',
      followers: '256K',
      engagement: '45.8K',
      engagementRate: '12.3%',
      weeklyData: [
        { date: 'Mon', likes: 3200, comments: 456, shares: 289 },
        { date: 'Tue', likes: 4500, comments: 678, shares: 412 },
        { date: 'Wed', likes: 3800, comments: 534, shares: 345 },
        { date: 'Thu', likes: 5200, comments: 789, shares: 498 },
        { date: 'Fri', likes: 6800, comments: 1012, shares: 678 },
        { date: 'Sat', likes: 7200, comments: 1134, shares: 745 },
        { date: 'Sun', likes: 5900, comments: 867, shares: 567 },
      ],
      topPosts: [
        { title: 'Trending Challenge Video', engagement: 12450 },
        { title: 'Product Tutorial', engagement: 9890 },
        { title: 'Behind the Scenes', engagement: 8340 },
      ]
    },
    youtube: {
      name: 'YouTube',
      icon: '▶️',
      color: '#FF0000',
      followers: '67.3K',
      engagement: '18.9K',
      engagementRate: '8.4%',
      weeklyData: [
        { date: 'Mon', likes: 1200, comments: 234, shares: 145 },
        { date: 'Tue', likes: 1450, comments: 298, shares: 189 },
        { date: 'Wed', likes: 1380, comments: 256, shares: 167 },
        { date: 'Thu', likes: 1620, comments: 334, shares: 212 },
        { date: 'Fri', likes: 1880, comments: 412, shares: 278 },
        { date: 'Sat', likes: 2100, comments: 389, shares: 298 },
        { date: 'Sun', likes: 1890, comments: 345, shares: 234 },
      ],
      topPosts: [
        { title: 'How-to Tutorial Video', engagement: 5450 },
        { title: 'Product Review', engagement: 4890 },
        { title: 'Weekly Vlog', engagement: 3840 },
      ]
    },
  };

  const allPlatformsData = {
    totalFollowers: '621K',
    totalEngagement: '106.7K',
    avgEngagementRate: '7.6%',
    weeklyData: [
      { date: 'Mon', total: 7230 },
      { date: 'Tue', total: 9978 },
      { date: 'Wed', total: 8388 },
      { date: 'Thu', total: 11156 },
      { date: 'Fri', total: 14428 },
      { date: 'Sat', total: 13070 },
      { date: 'Sun', total: 11259 },
    ],
  };

  const platforms = ['all', 'twitter', 'instagram', 'facebook', 'linkedin', 'tiktok', 'youtube'];
  const currentData = selectedPlatform === 'all' ? null : platformData[selectedPlatform as keyof typeof platformData];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
          Analytics & Statistics
        </h1>

        {/* Platform Selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                selectedPlatform === platform
                  ? 'bg-[#00a884] text-white'
                  : theme === 'dark'
                  ? 'bg-[#202c33] text-[#8696a0] hover:bg-[#2a3942]'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {platform === 'all' ? '🌐 All Platforms' : platformData[platform as keyof typeof platformData].icon + ' ' + platformData[platform as keyof typeof platformData].name}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        {selectedPlatform === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">👥</span>
                <span className="text-[#00a884] text-sm font-semibold">+12%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Total Followers</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{allPlatformsData.totalFollowers}</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">📊</span>
                <span className="text-[#00a884] text-sm font-semibold">+18%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Total Engagement</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{allPlatformsData.totalEngagement}</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">💹</span>
                <span className="text-[#00a884] text-sm font-semibold">+3.2%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Avg. Engagement Rate</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{allPlatformsData.avgEngagementRate}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">👥</span>
                <span className="text-[#00a884] text-sm font-semibold">+8%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Followers</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{currentData?.followers}</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">📊</span>
                <span className="text-[#00a884] text-sm font-semibold">+15%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Total Engagement</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{currentData?.engagement}</p>
            </div>
            <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">💹</span>
                <span className="text-[#00a884] text-sm font-semibold">+2.1%</span>
              </div>
              <p className={`${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'} text-sm`}>Engagement Rate</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>{currentData?.engagementRate}</p>
            </div>
          </div>
        )}

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Engagement Trends */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              {selectedPlatform === 'all' ? 'Overall Engagement' : `${currentData?.name} Engagement`}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {selectedPlatform === 'all' ? (
                <LineChart data={allPlatformsData.weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#2a3942' : '#e5e7eb'} />
                  <XAxis dataKey="date" stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <YAxis stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#202c33' : '#fff', border: 'none' }} />
                  <Line type="monotone" dataKey="total" stroke="#00a884" strokeWidth={2} name="Total Engagement" />
                </LineChart>
              ) : (
                <LineChart data={currentData?.weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#2a3942' : '#e5e7eb'} />
                  <XAxis dataKey="date" stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <YAxis stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#202c33' : '#fff', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey={Object.keys(currentData?.weeklyData[0] || {}).filter(k => k !== 'date')[0]} stroke="#00a884" strokeWidth={2} />
                  <Line type="monotone" dataKey={Object.keys(currentData?.weeklyData[0] || {}).filter(k => k !== 'date')[1]} stroke="#0088cc" strokeWidth={2} />
                  <Line type="monotone" dataKey={Object.keys(currentData?.weeklyData[0] || {}).filter(k => k !== 'date')[2]} stroke="#ff6b6b" strokeWidth={2} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Top Posts */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              {selectedPlatform === 'all' ? 'Platform Comparison' : 'Top Performing Posts'}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {selectedPlatform === 'all' ? (
                <BarChart data={Object.entries(platformData).map(([key, data]) => ({ name: data.name, engagement: parseInt(data.engagement.replace('K', '')) * 1000 }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#2a3942' : '#e5e7eb'} />
                  <XAxis dataKey="name" stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#202c33' : '#fff', border: 'none' }} />
                  <Bar dataKey="engagement" fill="#00a884" />
                </BarChart>
              ) : (
                <BarChart data={currentData?.topPosts} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#2a3942' : '#e5e7eb'} />
                  <XAxis type="number" stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} />
                  <YAxis dataKey="title" type="category" stroke={theme === 'dark' ? '#8696a0' : '#6b7280'} width={150} />
                  <Tooltip contentStyle={{ backgroundColor: theme === 'dark' ? '#202c33' : '#fff', border: 'none' }} />
                  <Bar dataKey="engagement" fill="#00a884" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow mt-6`}>
          <div className="flex items-center gap-2 mb-4">
            <MdAutoAwesome className="text-[#00a884] text-xl" />
            <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              AI-Powered Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
              <div className="text-2xl mb-2">📊</div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                Engagement Pattern
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                {selectedPlatform === 'all' 
                  ? 'Your overall engagement peaks on Fridays at 2-4 PM. Consider scheduling important posts during this window.'
                  : `Your ${currentData?.name} engagement is highest on weekdays. Post between 2-4 PM for maximum reach.`}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
              <div className="text-2xl mb-2">💡</div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                Content Recommendation
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                {selectedPlatform === 'all'
                  ? 'Video content performs 3x better than text. Increase video posts by 40% for better engagement.'
                  : selectedPlatform === 'tiktok' || selectedPlatform === 'youtube'
                  ? 'Short-form videos (15-30s) get 5x more views. Keep your content concise and engaging.'
                  : 'Posts with images get 2.5x more engagement. Always include high-quality visuals.'}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
              <div className="text-2xl mb-2">🎯</div>
              <h3 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                Growth Strategy
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                {selectedPlatform === 'all'
                  ? 'Focus on TikTok and Instagram - they show 45% higher engagement rates than other platforms.'
                  : `Your ${currentData?.name} follower growth is strong. Maintain posting consistency and engage with comments within 1 hour.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
