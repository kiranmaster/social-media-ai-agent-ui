import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Connections from './components/Connections';
import AIContentGenerator from './components/AIContentGenerator';
import AIScheduler from './components/AIScheduler';
import AITrends from './components/AITrends';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/ai-content" element={<AIContentGenerator />} />
            <Route path="/ai-scheduler" element={<AIScheduler />} />
            <Route path="/ai-trends" element={<AITrends />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
