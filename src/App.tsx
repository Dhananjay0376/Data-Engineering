import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopicContent from './components/TopicContent';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [activeTopic, setActiveTopic] = useState('overview');

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveTopic(customEvent.detail);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('navigateTopic', handler);
    return () => window.removeEventListener('navigateTopic', handler);
  }, []);

  const handleTopicChange = (id: string) => {
    setActiveTopic(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a16] text-white">
      <Sidebar activeTopic={activeTopic} setActiveTopic={handleTopicChange} />
      <ProgressBar activeTopic={activeTopic} />
      <main className="lg:ml-72 pt-20 pb-20 px-5 md:px-10">
        <TopicContent activeTopic={activeTopic} />
      </main>
    </div>
  );
}
