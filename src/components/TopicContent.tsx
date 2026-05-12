import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen, HelpCircle, MessageSquare } from 'lucide-react';
import { topics } from '../lib/data';

const ERDiagram = lazy(() => import('./diagrams/ERDiagram'));
const DataLakeDiagram = lazy(() => import('./diagrams/DataLakeDiagram'));
const OLAPvsOLTP = lazy(() => import('./diagrams/OLAPvsOLTP'));

interface TopicContentProps {
  activeTopic: string;
}

const diagramMap: Record<string, React.ComponentType> = {
  'er-diagram': ERDiagram,
  'data-lake': DataLakeDiagram,
  'olap-vs-oltp': OLAPvsOLTP,
};


export default function TopicContent({ activeTopic }: TopicContentProps) {
  const topic = topics.find(t => t.id === activeTopic);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#00D4AA] to-[#7B61FF] flex items-center justify-center mb-10 shadow-2xl shadow-[#00D4AA]/20"
        >
          <BookOpen size={32} className="text-white" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Mastering Data Engineering
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg leading-relaxed mb-16"
        >
          A curated curriculum designed to transform learners into architects of information. 
          Select a module from the sidebar to begin your journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-12 border-t border-white/5 flex flex-col items-center w-full"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-4 font-bold">An Educational Platform By</p>
          <h4 className="text-3xl text-white/35 font-serif italic tracking-wide" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Dhananjay Narula
          </h4>
          <div className="mt-8 flex gap-4">
             <div className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/30 uppercase tracking-widest">Architect</div>
             <div className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/30 uppercase tracking-widest">Educator</div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={topic.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Topic Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="h-1 w-12 rounded-full"
              style={{ backgroundColor: topic.color }}
            />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: topic.color }}
            >
              Module {topics.indexOf(topic) + 1}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {topic.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-white/55 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} />
              {topic.sections.length} sections
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>~{topic.sections.length * 3} min read</span>
          </motion.div>
        </div>

        {/* All Sections — Fully Expanded */}
        <div className="space-y-12">
          {topic.sections.map((section, index) => {
            const DiagramComponent = section.diagram ? diagramMap[section.diagram] : null;

            return (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold mt-0.5"
                    style={{
                      backgroundColor: `${topic.color}12`,
                      color: topic.color,
                      border: `1px solid ${topic.color}20`,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-semibold text-white leading-snug"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {section.title}
                    </h3>
                    <div
                      className="h-[2px] w-10 rounded-full mt-3 opacity-40"
                      style={{ backgroundColor: topic.color }}
                    />
                  </div>
                </div>

                {/* Section Body */}
                <div className="ml-0 md:ml-[60px]">
                  {/* Content paragraph */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    className="text-white/75 leading-[1.85] text-[15px] mb-6"
                  >
                    {section.content}
                  </motion.p>

                  {/* Key Points */}
                  {section.keyPoints && section.keyPoints.length > 0 && (
                    <div
                      className="rounded-xl border p-5 md:p-6 space-y-0"
                      style={{
                        borderColor: `${topic.color}12`,
                        backgroundColor: `${topic.color}04`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: topic.color }}
                        />
                        <span
                          className="text-[11px] font-bold tracking-[0.15em] uppercase"
                          style={{ color: topic.color }}
                        >
                          Key Points
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {section.keyPoints.map((point, i) => {
                          // Split on colon to highlight the label if present
                          const colonIdx = point.indexOf(':');
                          const hasLabel = colonIdx > 0 && colonIdx < 40;
                          const label = hasLabel ? point.slice(0, colonIdx) : null;
                          const rest = hasLabel ? point.slice(colonIdx + 1).trim() : point;

                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.25 + index * 0.06 + i * 0.04 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <div
                                className="w-[22px] h-[22px] rounded-md flex items-center justify-center shrink-0 mt-[1px]"
                                style={{ backgroundColor: `${topic.color}18` }}
                              >
                                <CheckCircle size={12} style={{ color: topic.color }} />
                              </div>
                              <p className="text-sm leading-relaxed text-white/70 group-hover/item:text-white/85 transition-colors">
                                {label && (
                                  <span className="font-semibold text-white/70">{label}: </span>
                                )}
                                {rest}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Practice Questions */}
                  {section.practiceQuestions && section.practiceQuestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="mt-10 pt-8 border-t border-white/5"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <HelpCircle size={16} className="text-white/40" />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">
                          Exam Prep & Practice
                        </span>
                      </div>

                      <div className="space-y-12">
                        {section.practiceQuestions.map((pq, pqi) => (
                          <div key={pqi} className="group/pq">
                            <h4 className="text-xl font-medium text-white mb-6 flex gap-3 leading-snug" style={{ fontFamily: "'Instrument Serif', serif" }}>
                              <span className="text-white/20 italic shrink-0">Q.</span>
                              {pq.question}
                            </h4>
                            
                            <div className="space-y-4">
                              {/* Quick Recall Box */}
                              <div 
                                className="rounded-xl border p-4 bg-white/[0.02] flex items-start gap-4 transition-colors hover:bg-white/[0.04]"
                                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                              >
                                <div className="px-2 py-1 rounded bg-white/5 text-[9px] font-bold uppercase tracking-widest text-white/40 shrink-0">
                                  Recall
                                </div>
                                <p className="text-sm text-white/45 leading-relaxed italic">
                                  {pq.shortAnswer}
                                </p>
                              </div>

                              {/* Master Answer Box */}
                              <div 
                                className="relative overflow-hidden rounded-2xl border transition-all duration-500 hover:border-white/20"
                                style={{ 
                                  borderColor: `${topic.color}20`,
                                  backgroundColor: `${topic.color}05`
                                }}
                              >
                                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: topic.color }} />
                                
                                <div className="p-6 md:p-8">
                                  <div className="flex items-center gap-2 mb-5">
                                    <MessageSquare size={12} style={{ color: topic.color }} className="opacity-80" />
                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: topic.color }}>
                                      Detailed Master Answer
                                    </span>
                                  </div>
                                  <div className="text-[14px] md:text-[15px] leading-relaxed text-white/75 italic">
                                    {/* Splitting text to highlight bolded terms from data */}
                                    {pq.detailedAnswer.split('**').map((part, i) => 
                                      i % 2 === 1 ? (
                                        <span key={i} className="text-white font-bold not-italic" style={{ color: topic.color }}>{part}</span>
                                      ) : part
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Diagram */}
                  {DiagramComponent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + index * 0.06 }}
                      className="mt-6"
                    >
                      <Suspense fallback={<div className="h-40 rounded-xl bg-white/5 animate-pulse" />}>
                        <DiagramComponent />
                      </Suspense>
                    </motion.div>
                  )}
                </div>

                {/* Divider between sections */}
                {index < topic.sections.length - 1 && (
                  <div className="mt-12 flex items-center gap-3">
                    <div className="flex-1 h-px bg-white/5" />
                    <div
                      className="w-1.5 h-1.5 rounded-full opacity-20"
                      style={{ backgroundColor: topic.color }}
                    />
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                )}
              </motion.section>
            );
          })}
        </div>

        {/* Module Mastery Section */}
        {topic.masteryQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-20 p-8 md:p-12 rounded-[2rem] border relative overflow-hidden group"
            style={{ 
              borderColor: `${topic.color}25`,
              background: `linear-gradient(145deg, ${topic.color}08 0%, rgba(0,0,0,0) 100%)`
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
               <HelpCircle size={120} style={{ color: topic.color }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${topic.color}20` }}>
                  <HelpCircle size={20} style={{ color: topic.color }} />
                </div>
                <span className="text-[12px] font-black tracking-[0.3em] uppercase" style={{ color: topic.color }}>
                  Ultimate Module Mastery
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight max-w-2xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {topic.masteryQuestion.question}
              </h3>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                   <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Concise Recall</div>
                   <p className="text-white/50 text-[15px] italic leading-relaxed">
                     {topic.masteryQuestion.shortAnswer}
                   </p>
                </div>

                <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: topic.color }} />
                   <div className="flex items-center gap-3 mb-6">
                     <div className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: `${topic.color}20`, color: topic.color }}>
                       Master Answer (Exam Ready)
                     </div>
                     <span className="text-white/20 text-[10px] font-medium tracking-widest uppercase">Synthesis Report</span>
                   </div>
                   <div className="text-[15px] md:text-[16px] leading-[1.8] text-white/80 font-medium italic">
                      {topic.masteryQuestion.detailedAnswer.split('**').map((part, i) => 
                        i % 2 === 1 ? (
                          <span key={i} className="text-white font-bold not-italic underline decoration-2 underline-offset-4" style={{ textDecorationColor: `${topic.color}40` }}>{part}</span>
                        ) : part
                      )}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Module Navigation */}
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
          {topics.indexOf(topic) > 0 ? (
            <button
              onClick={() => {
                const prev = topics[topics.indexOf(topic) - 1];
                if (prev) {
                  const event = new CustomEvent('navigateTopic', { detail: prev.id });
                  window.dispatchEvent(event);
                }
              }}
              className="flex items-center gap-3 text-white/35 hover:text-white/60 transition-colors text-sm group"
            >
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest block text-white/50">Previous</span>
                <span className="font-medium">{topics[topics.indexOf(topic) - 1].title}</span>
              </div>
            </button>
          ) : (
            <div />
          )}
          {topics.indexOf(topic) < topics.length - 1 ? (
            <button
              onClick={() => {
                const next = topics[topics.indexOf(topic) + 1];
                if (next) {
                  const event = new CustomEvent('navigateTopic', { detail: next.id });
                  window.dispatchEvent(event);
                }
              }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] group"
              style={{
                backgroundColor: `${topic.color}10`,
                color: topic.color,
                border: `1px solid ${topic.color}20`,
              }}
            >
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-widest block opacity-70">Next Module</span>
                <span className="font-medium">{topics[topics.indexOf(topic) + 1].title}</span>
              </div>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div />
          )}
        </div>

        {/* Footer Credit */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center text-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mb-8" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 mb-3 font-bold">Project Excellence By</p>
          <h4 className="text-2xl text-white/40 font-serif italic tracking-wide" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Dhananjay Narula
          </h4>
          <p className="mt-4 text-[11px] text-white/15 max-w-xs leading-relaxed">
            Designed to bridge the gap between complex data engineering concepts and exam-ready mastery.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
