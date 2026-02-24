import { motion } from 'framer-motion';
import { topics } from '../lib/data';

interface ProgressBarProps {
  activeTopic: string;
}

export default function ProgressBar({ activeTopic }: ProgressBarProps) {
  const currentIndex = topics.findIndex(t => t.id === activeTopic);
  const progress = ((currentIndex + 1) / topics.length) * 100;
  const topic = topics[currentIndex];

  return (
    <div className="fixed top-0 left-0 lg:left-72 right-0 z-20 bg-[#0d0d1a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="h-1 bg-white/5 w-full">
        <motion.div
          className="h-full rounded-r-full"
          style={{ backgroundColor: topic?.color || '#00D4AA' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 pl-10 lg:pl-0">
          {topics.map((t, i) => (
            <div
              key={t.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'scale-125'
                  : i < currentIndex
                  ? 'opacity-60'
                  : 'opacity-20'
              }`}
              style={{
                backgroundColor: i <= currentIndex ? t.color : '#ffffff'
              }}
            />
          ))}
        </div>
        <span className="text-xs text-white/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {currentIndex + 1} / {topics.length} modules
        </span>
      </div>
    </div>
  );
}
