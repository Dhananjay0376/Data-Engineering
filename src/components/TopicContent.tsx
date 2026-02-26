import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { topics } from '../lib/data';
import ERDiagram from './diagrams/ERDiagram';
import DataLakeDiagram from './diagrams/DataLakeDiagram';
import OLAPvsOLTP from './diagrams/OLAPvsOLTP';

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

  if (!topic) return null;

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

                  {/* Diagram */}
                  {DiagramComponent && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + index * 0.06 }}
                      className="mt-6"
                    >
                      <DiagramComponent />
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
      </motion.div>
    </AnimatePresence>
  );
}
