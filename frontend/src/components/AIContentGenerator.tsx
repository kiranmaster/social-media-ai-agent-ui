import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HiSparkles } from 'react-icons/hi2';

export default function AIContentGenerator() {
  const { theme } = useTheme();
  const [contentType, setContentType] = useState('caption');
  const [platform, setPlatform] = useState('instagram');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [generated, setGenerated] = useState('');
  const [loading, setLoading] = useState(false);

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      const samples = {
        caption: `🚀 Exciting news! We're thrilled to announce our latest innovation that will transform the way you work. Stay tuned for the big reveal! 💡\n\n#Innovation #TechNews #ComingSoon`,
        hashtags: `#SocialMedia #Marketing #ContentCreator #DigitalMarketing #GrowthHacking #Engagement #SocialMediaTips #ContentStrategy #Branding #OnlineMarketing`,
        script: `[INTRO - 0:00-0:05]\n"Hey everyone! Today I'm sharing 3 game-changing tips..."\n\n[MAIN CONTENT - 0:05-0:45]\nTip 1: Always post during peak hours\nTip 2: Use engaging visuals\nTip 3: Interact with your audience\n\n[OUTRO - 0:45-0:60]\n"Don't forget to like and subscribe!"`,
        description: `In this comprehensive guide, we explore the latest trends and strategies that will help you maximize your social media presence. Perfect for beginners and experts alike!`
      };
      setGenerated(samples[contentType as keyof typeof samples]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <HiSparkles className="text-[#00a884] text-3xl" />
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            AI Content Generator
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              Generate Content
            </h2>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                  Content Type
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942] text-[#e9edef]' : 'bg-gray-100 text-gray-800'} focus:outline-none`}
                >
                  <option value="caption">Post Caption</option>
                  <option value="hashtags">Hashtags</option>
                  <option value="script">Video Script</option>
                  <option value="description">Description</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942] text-[#e9edef]' : 'bg-gray-100 text-gray-800'} focus:outline-none`}
                >
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                  Topic/Keywords
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., product launch, tips, tutorial"
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942] text-[#e9edef] placeholder-[#8696a0]' : 'bg-gray-100 text-gray-800 placeholder-gray-500'} focus:outline-none`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942] text-[#e9edef]' : 'bg-gray-100 text-gray-800'} focus:outline-none`}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="funny">Funny</option>
                  <option value="inspirational">Inspirational</option>
                </select>
              </div>

              <button
                onClick={generateContent}
                disabled={loading}
                className="w-full py-3 bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-lg font-medium transition-all disabled:bg-gray-400"
              >
                {loading ? 'Generating...' : 'Generate with AI'}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
              Generated Content
            </h2>
            
            {generated ? (
              <div className="space-y-4">
                <textarea
                  value={generated}
                  onChange={(e) => setGenerated(e.target.value)}
                  className={`w-full h-64 px-4 py-3 rounded-lg ${theme === 'dark' ? 'bg-[#2a3942] text-[#e9edef]' : 'bg-gray-100 text-gray-800'} focus:outline-none resize-none`}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(generated)}
                    className={`flex-1 py-2 ${theme === 'dark' ? 'bg-[#2a3942] hover:bg-[#374955]' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg font-medium transition-all`}
                  >
                    Copy
                  </button>
                  <button
                    onClick={generateContent}
                    className="flex-1 py-2 bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-lg font-medium transition-all"
                  >
                    Regenerate
                  </button>
                </div>
              </div>
            ) : (
              <div className={`h-64 flex items-center justify-center ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-400'}`}>
                <p>Generated content will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
