import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleSave = () => {
    console.log('Save profile:', { name, email });
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
              {name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Chat History</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 border rounded-lg hover:bg-gray-50">
                <p className="font-medium">Chat Session {i}</p>
                <p className="text-sm text-gray-500">2 hours ago • 15 messages</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
