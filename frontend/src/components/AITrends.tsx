import { useTheme } from '../context/ThemeContext';
import { MdTrendingUp, MdAutoAwesome } from 'react-icons/md';

export default function AITrends() {
  const { theme } = useTheme();

  const trendingTopics = [
    { topic: 'AI & Machine Learning', volume: '2.5M', growth: '+45%', relevance: 95 },
    { topic: 'Sustainable Living', volume: '1.8M', growth: '+32%', relevance: 88 },
    { topic: 'Remote Work Tips', volume: '1.2M', growth: '+28%', relevance: 82 },
    { topic: 'Digital Marketing', volume: '980K', growth: '+25%', relevance: 90 },
    { topic: 'Health & Wellness', volume: '850K', growth: '+22%', relevance: 75 },
  ];

  const contentSuggestions = [
    { title: 'Create a post about AI automation tools', reason: 'Trending in your niche', priority: 'High' },
    { title: 'Share tips on sustainable practices', reason: 'High engagement potential', priority: 'Medium' },
    { title: 'Tutorial on remote work productivity', reason: 'Audience interest spike', priority: 'High' },
  ];

  const viralOpportunities = [
    { hashtag: '#AIRevolution', posts: '125K', engagement: '8.5M', opportunity: 'High' },
    { hashtag: '#TechTrends2024', posts: '89K', engagement: '5.2M', opportunity: 'Medium' },
    { hashtag: '#FutureOfWork', posts: '67K', engagement: '3.8M', opportunity: 'High' },
  ];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <MdTrendingUp className="text-[#00a884] text-3xl" />
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            AI Trend Detector
          </h1>
        </div>

        {/* Trending Topics */}
        <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow mb-6`}>
          <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            Trending Topics in Your Niche
          </h2>
          <div className="space-y-3">
            {trendingTopics.map((trend, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${theme === 'dark' ? 'bg-[#2a3942] border-[#374955]' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                      {trend.topic}
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className={theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}>
                        Volume: {trend.volume}
                      </span>
                      <span className="text-[#00a884] font-semibold">
                        {trend.growth}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'} mb-1`}>
                      Relevance
                    </div>
                    <div className="text-2xl font-bold text-[#00a884]">
                      {trend.relevance}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Suggestions */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <div className="flex items-center gap-2 mb-4">
              <MdAutoAwesome className="text-[#00a884]" />
              <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                AI Content Suggestions
              </h2>
            </div>
            <div className="space-y-3">
              {contentSuggestions.map((suggestion, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`font-semibold flex-1 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                      {suggestion.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      suggestion.priority === 'High' 
                        ? 'bg-red-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {suggestion.priority}
                    </span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                    {suggestion.reason}
                  </p>
                  <button className="mt-3 px-4 py-2 bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-lg text-sm font-medium transition-all">
                    Create Post
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Viral Opportunities */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              Viral Opportunities
            </h2>
            <div className="space-y-3">
              {viralOpportunities.map((opp, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942]' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold text-[#00a884]`}>
                      {opp.hashtag}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      opp.opportunity === 'High' 
                        ? 'bg-[#00a884] text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {opp.opportunity}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className={theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}>Posts</p>
                      <p className={`font-semibold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                        {opp.posts}
                      </p>
                    </div>
                    <div>
                      <p className={theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}>Engagement</p>
                      <p className={`font-semibold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                        {opp.engagement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
