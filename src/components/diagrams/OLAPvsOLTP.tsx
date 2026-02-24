import { motion } from 'framer-motion';

export default function OLAPvsOLTP() {
  const comparisons = [
    { feature: 'Purpose', oltp: 'Transaction processing', olap: 'Analytical processing' },
    { feature: 'Operations', oltp: 'INSERT, UPDATE, DELETE', olap: 'SELECT, aggregations' },
    { feature: 'Data Volume', oltp: 'Current, operational', olap: 'Historical, consolidated' },
    { feature: 'Schema', oltp: 'Normalized (3NF)', olap: 'Denormalized (Star/Snowflake)' },
    { feature: 'Storage', oltp: 'Row-oriented', olap: 'Column-oriented' },
    { feature: 'Users', oltp: 'Many concurrent users', olap: 'Few analysts / BI tools' },
    { feature: 'Query Speed', oltp: 'Fast, simple queries', olap: 'Complex, longer queries' },
    { feature: 'Example', oltp: 'PostgreSQL, MySQL', olap: 'Snowflake, BigQuery' }
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a18] p-6 overflow-x-auto">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#E040FB]" />
        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">OLAP vs OLTP Comparison</span>
      </div>

      <table className="w-full min-w-[500px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <thead>
          <tr>
            <th className="text-left text-xs text-white/30 uppercase tracking-wider pb-4 w-[25%]">Feature</th>
            <th className="text-left text-xs uppercase tracking-wider pb-4 w-[37.5%]">
              <span className="text-[#00B4D8]">OLTP</span>
            </th>
            <th className="text-left text-xs uppercase tracking-wider pb-4 w-[37.5%]">
              <span className="text-[#E040FB]">OLAP</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((row, idx) => (
            <motion.tr
              key={row.feature}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border-t border-white/5"
            >
              <td className="py-3 text-sm text-white/60 font-medium">{row.feature}</td>
              <td className="py-3">
                <span className="text-sm text-white/45 bg-[#00B4D8]/8 px-2.5 py-1 rounded-md">
                  {row.oltp}
                </span>
              </td>
              <td className="py-3">
                <span className="text-sm text-white/45 bg-[#E040FB]/8 px-2.5 py-1 rounded-md">
                  {row.olap}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
