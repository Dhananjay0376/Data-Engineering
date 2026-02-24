import { motion } from 'framer-motion';

export default function ERDiagram() {
  const entities = [
    {
      name: 'Customer',
      attrs: ['customer_id (PK)', 'name', 'email', 'phone'],
      x: 50,
      y: 30,
      color: '#FFB800'
    },
    {
      name: 'Order',
      attrs: ['order_id (PK)', 'customer_id (FK)', 'order_date', 'total_amount'],
      x: 380,
      y: 30,
      color: '#7B61FF'
    },
    {
      name: 'Product',
      attrs: ['product_id (PK)', 'name', 'price', 'category'],
      x: 380,
      y: 240,
      color: '#00D4AA'
    },
    {
      name: 'OrderItem',
      attrs: ['item_id (PK)', 'order_id (FK)', 'product_id (FK)', 'quantity'],
      x: 50,
      y: 240,
      color: '#FF6B6B'
    }
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a18] p-6 overflow-x-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#FFB800]" />
        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">E-R Diagram — E-Commerce Example</span>
      </div>
      <svg viewBox="0 0 700 420" className="w-full min-w-[500px]" style={{ fontFamily: "'DM Sans', monospace" }}>
        {/* Relationship lines */}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          x1="270" y1="80" x2="380" y2="80"
          stroke="#ffffff20" strokeWidth="2" strokeDasharray="6 4"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          x1="500" y1="160" x2="500" y2="240"
          stroke="#ffffff20" strokeWidth="2" strokeDasharray="6 4"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          x1="270" y1="290" x2="380" y2="290"
          stroke="#ffffff20" strokeWidth="2" strokeDasharray="6 4"
        />
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          x1="170" y1="160" x2="170" y2="240"
          stroke="#ffffff20" strokeWidth="2" strokeDasharray="6 4"
        />

        {/* Cardinality labels */}
        <text x="275" y="72" fill="#ffffff60" fontSize="11" fontWeight="600">1</text>
        <text x="370" y="72" fill="#ffffff60" fontSize="11" fontWeight="600">N</text>
        <text x="510" y="175" fill="#ffffff60" fontSize="11" fontWeight="600">1</text>
        <text x="510" y="235" fill="#ffffff60" fontSize="11" fontWeight="600">N</text>
        <text x="275" y="282" fill="#ffffff60" fontSize="11" fontWeight="600">N</text>
        <text x="370" y="282" fill="#ffffff60" fontSize="11" fontWeight="600">1</text>
        <text x="180" y="175" fill="#ffffff60" fontSize="11" fontWeight="600">1</text>
        <text x="180" y="235" fill="#ffffff60" fontSize="11" fontWeight="600">N</text>

        {/* Entity boxes */}
        {entities.map((entity, idx) => (
          <motion.g
            key={entity.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12 }}
          >
            <rect
              x={entity.x}
              y={entity.y}
              width="220"
              height={30 + entity.attrs.length * 24}
              rx="10"
              fill="#12122a"
              stroke={entity.color + '40'}
              strokeWidth="1.5"
            />
            <rect
              x={entity.x}
              y={entity.y}
              width="220"
              height="32"
              rx="10"
              fill={entity.color + '15'}
            />
            <rect
              x={entity.x}
              y={entity.y + 22}
              width="220"
              height="10"
              fill={entity.color + '15'}
            />
            <text
              x={entity.x + 110}
              y={entity.y + 21}
              textAnchor="middle"
              fill={entity.color}
              fontSize="13"
              fontWeight="700"
            >
              {entity.name}
            </text>
            {entity.attrs.map((attr, i) => (
              <text
                key={attr}
                x={entity.x + 16}
                y={entity.y + 52 + i * 24}
                fill={attr.includes('PK') ? '#ffffff90' : attr.includes('FK') ? '#ffffff60' : '#ffffff40'}
                fontSize="11"
                fontFamily="monospace"
              >
                {attr}
              </text>
            ))}
          </motion.g>
        ))}

        {/* Relationship diamonds */}
        {[
          { x: 325, y: 65, label: 'places' },
          { x: 325, y: 275, label: 'contains' },
        ].map((rel, idx) => (
          <motion.g
            key={rel.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + idx * 0.1 }}
          >
            <polygon
              points={`${rel.x},${rel.y - 15} ${rel.x + 25},${rel.y} ${rel.x},${rel.y + 15} ${rel.x - 25},${rel.y}`}
              fill="#1a1a3a"
              stroke="#ffffff20"
              strokeWidth="1"
            />
            <text x={rel.x} y={rel.y + 4} textAnchor="middle" fill="#ffffff50" fontSize="8" fontWeight="600">
              {rel.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
