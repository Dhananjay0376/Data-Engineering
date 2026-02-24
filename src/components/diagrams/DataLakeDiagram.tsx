import { motion } from 'framer-motion';

export default function DataLakeDiagram() {
  const layers = [
    {
      label: 'Raw Zone (Bronze)',
      desc: 'Unprocessed data in native format',
      color: '#FF6B6B',
      items: ['JSON', 'CSV', 'Logs', 'Images']
    },
    {
      label: 'Curated Zone (Silver)',
      desc: 'Cleaned, validated, deduplicated',
      color: '#FFB800',
      items: ['Parquet', 'Delta', 'Validated', 'Typed']
    },
    {
      label: 'Consumption Zone (Gold)',
      desc: 'Aggregated, business-ready',
      color: '#00D4AA',
      items: ['Metrics', 'Features', 'Reports', 'ML-Ready']
    }
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a18] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#00D4AA]" />
        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">Data Lake Architecture — Medallion Pattern</span>
      </div>

      <div className="space-y-4">
        {layers.map((layer, idx) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="flex items-stretch gap-4 rounded-xl border p-4"
            style={{ borderColor: layer.color + '25', backgroundColor: layer.color + '08' }}
          >
            <div className="flex flex-col justify-center min-w-[160px]">
              <span className="text-sm font-bold" style={{ color: layer.color, fontFamily: "'DM Sans', sans-serif" }}>
                {layer.label}
              </span>
              <span className="text-xs text-white/35 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {layer.desc}
              </span>
            </div>
            <div className="flex-1 flex items-center gap-2 flex-wrap">
              {layer.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.15 + i * 0.05 + 0.3 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono"
                  style={{ backgroundColor: layer.color + '15', color: layer.color + 'cc' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            {idx < layers.length - 1 && (
              <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {['Ingest', '→', 'Clean', '→', 'Serve'].map((step, i) => (
          <span
            key={i}
            className={`text-xs ${
              step === '→' ? 'text-white/20' : 'text-white/40 font-mono bg-white/5 px-3 py-1 rounded-md'
            }`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}
