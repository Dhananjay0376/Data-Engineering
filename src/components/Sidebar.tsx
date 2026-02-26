import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, RefreshCw, Download, GitBranch, HardDrive, Workflow, ChevronRight, BookOpen, Menu, X } from 'lucide-react';
import { topics } from '../lib/data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Database, RefreshCw, Download, GitBranch, HardDrive, Workflow
};

interface SidebarProps {
  activeTopic: string;
  setActiveTopic: (id: string) => void;
}

export default function Sidebar({ activeTopic, setActiveTopic }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id: string) => {
    setActiveTopic(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#1a1a2e]/90 backdrop-blur-sm border border-white/10 rounded-xl p-2.5 text-white shadow-lg"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#0d0d1a]/95 backdrop-blur-xl border-r border-white/5 z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#7B61FF] flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Data Eng</h1>
              <p className="text-white/60 text-xs tracking-widest uppercase">Course Guide</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-88px)]">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon];
            const isActive = activeTopic === topic.id;
            return (
              <motion.button
                key={topic.id}
                onClick={() => handleSelect(topic.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-white/8 text-white'
                    : 'text-white/65 hover:text-white/90 hover:bg-white/3'
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: topic.color }}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/8'
                  }`}
                >
                  {Icon && <Icon size={16} style={{ color: isActive ? topic.color : undefined }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium block truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {topic.title}
                  </span>
                  <span className="text-xs text-white/50">
                    {topic.sections.length} sections
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${
                    isActive ? 'rotate-90 text-white/40' : 'text-white/20'
                  }`}
                />
              </motion.button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
