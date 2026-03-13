import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa6';

interface Platform {
  id: string;
  name: string;
  icon: any;
  color: string;
  connected: boolean;
  username?: string;
}

export default function Connections() {
  const { theme } = useTheme();
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'twitter', name: 'Twitter/X', icon: FaXTwitter, color: '#000000', connected: false },
    { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: '#E4405F', connected: false },
    { id: 'facebook', name: 'Facebook', icon: FaFacebook, color: '#1877F2', connected: false },
    { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2', connected: false },
    { id: 'tiktok', name: 'TikTok', icon: FaTiktok, color: '#000000', connected: false },
    { id: 'youtube', name: 'YouTube', icon: FaYoutube, color: '#FF0000', connected: false },
  ]);

  const handleConnect = (platformId: string) => {
    // Simulate OAuth connection
    setPlatforms(platforms.map(p => 
      p.id === platformId 
        ? { ...p, connected: true, username: `@user_${platformId}` }
        : p
    ));
  };

  const handleDisconnect = (platformId: string) => {
    setPlatforms(platforms.map(p => 
      p.id === platformId 
        ? { ...p, connected: false, username: undefined }
        : p
    ));
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
          Connected Accounts
        </h1>
        <p className={`mb-6 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
          Connect your social media accounts to start tracking analytics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className={`${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} p-6 rounded-lg shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: platform.color }}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
                        {platform.name}
                      </h3>
                      {platform.connected && platform.username && (
                        <p className={`text-sm ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-500'}`}>
                          {platform.username}
                        </p>
                      )}
                    </div>
                  </div>
                {platform.connected ? (
                  <span className="px-3 py-1 bg-[#00a884] text-white text-xs font-semibold rounded-full">
                    Connected
                  </span>
                ) : (
                  <span className={`px-3 py-1 ${theme === 'dark' ? 'bg-[#2a3942] text-[#8696a0]' : 'bg-gray-100 text-gray-500'} text-xs font-semibold rounded-full`}>
                    Not Connected
                  </span>
                )}
              </div>

              {platform.connected ? (
                <div className="space-y-2">
                  <button
                    onClick={() => handleDisconnect(platform.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-[#2a3942] text-[#e9edef] hover:bg-[#374955]'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Disconnect
                  </button>
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-[#2a3942] text-[#e9edef] hover:bg-[#374955]'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Refresh Data
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleConnect(platform.id)}
                  className="w-full py-2 px-4 bg-[#00a884] hover:bg-[#06cf9c] text-white rounded-lg font-medium transition-all"
                >
                  Connect {platform.name}
                </button>
              )}
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className={`mt-8 p-6 ${theme === 'dark' ? 'bg-[#202c33]' : 'bg-white'} rounded-lg shadow`}>
          <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-[#e9edef]' : 'text-gray-800'}`}>
            Why Connect Your Accounts?
          </h2>
          <ul className={`space-y-2 ${theme === 'dark' ? 'text-[#8696a0]' : 'text-gray-600'}`}>
            <li className="flex items-start gap-2">
              <span className="text-[#00a884] mt-1">✓</span>
              <span>Track engagement metrics across all platforms in one place</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00a884] mt-1">✓</span>
              <span>Get AI-powered insights and recommendations for your content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00a884] mt-1">✓</span>
              <span>Analyze your best performing posts and optimal posting times</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00a884] mt-1">✓</span>
              <span>Monitor follower growth and engagement trends over time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
