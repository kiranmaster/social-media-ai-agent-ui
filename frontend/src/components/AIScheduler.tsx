import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdSchedule, MdAutoAwesome } from 'react-icons/md';

export default function AIScheduler() {
  const { theme } = useTheme();
  const [scheduledPosts, setScheduledPosts] = useState([
    { id: 1, platform: 'Instagram', content: 'Check out our new product launch! 🚀', time: '2024-01-15 14:00', aiScore: 92 },
    { id: 2, platform: 'Twitter', content: 'Quick tip: Always engage with your audience...', time: '2024-01-15 16:30', aiScore: 88 },
    { id: 3, platform: 'LinkedIn', content: 'Excited to share our Q4 results...', time: '2024-01-16 09:00', aiScore: 95 },
  ]);

  const aiRecommendations = [
    { time: '14:00 - 16:00', reason: 'Peak engagement time for your audience', score: 95 },
    { time: '09:00 - 11:00', reason: 'High activity on LinkedIn', score: 88 },
    { time: '19:00 - 21:00', reason: 'Evening engagement spike', score: 82 },
  ];

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <MdSchedule className="text-[#00a884] text-3xl" />
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            AI Smart Scheduler
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* AI Recommendations */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <div className="flex items-center gap-2 mb-4">
              <MdAutoAwesome className="text-[#00a884]" />
              <h2 className={`text-lg font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                Best Times to Post
              </h2>
            </div>
            <div className="space-y-3">
              {aiRecommendations.map((rec, idx) => (
                <div key={idx} className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-semibold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                      {rec.time}
                    </span>
                    <span className="text-[#00a884] text-sm font-semibold">{rec.score}%</span>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                    {rec.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              Scheduler Stats
            </h2>
            <div className="space-y-4">
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>Scheduled Posts</p>
                <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>12</p>
              </div>
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>Avg AI Score</p>
                <p className={`text-3xl font-bold text-[#00a884]`}>91%</p>
              </div>
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>Posts This Week</p>
                <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>8</p>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              AI Insights
            </h2>
            <div className="space-y-3">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                  📈 Your posts perform 40% better on weekdays
                </p>
              </div>
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                  ⏰ Avoid posting between 22:00-06:00
                </p>
              </div>
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                <p className={`text-sm ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                  🎯 Instagram stories get 3x more views at 14:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Posts */}
        <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
          <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            Scheduled Posts
          </h2>
          <div className="space-y-3">
            {scheduledPosts.map((post) => (
              <div key={post.id} className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#2a3942] border-[#374955]' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-[#00a884] text-white' : 'bg-[#00a884] text-white'}`}>
                        {post.platform}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                        {post.time}
                      </span>
                      <span className="text-[#00a884] text-sm font-semibold">
                        AI Score: {post.aiScore}%
                      </span>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                      {post.content}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className={`px-3 py-1 rounded ${theme === 'dark' ? 'bg-[#374955] hover:bg-[#475761]' : 'bg-gray-200 hover:bg-gray-300'} text-sm`}>
                      Edit
                    </button>
                    <button className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
