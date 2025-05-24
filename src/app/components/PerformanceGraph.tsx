export default function PerformanceGraph() {
  return (
    <div className="relative h-48 sm:h-64">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-7 gap-px">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="border-r border-zinc-900 last:border-r-0" />
        ))}
      </div>
      
      {/* Data Line */}
      <div className="absolute bottom-0 left-0 right-0 h-full">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 L20,45 L40,60 L60,35 L80,55 L100,20"
            fill="none"
            stroke="#00F5D4"
            strokeWidth="0.5"
            className="opacity-50"
          />
          <path
            d="M0,50 L20,45 L40,60 L60,35 L80,55 L100,20"
            fill="none"
            stroke="#00F5D4"
            strokeWidth="1.5"
            strokeDasharray="1 2"
          />
        </svg>
      </div>

      {/* Data Points */}
      <div className="absolute bottom-0 left-0 right-0 h-full flex justify-between items-end">
        {[50, 45, 60, 35, 55, 20].map((height, i) => (
          <div 
            key={i}
            className="relative group"
            style={{ height: `${100 - height}%` }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00F5D4] relative">
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-zinc-900 text-[#00F5D4] text-xs py-1 px-2 rounded">
                  {height}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 