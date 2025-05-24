export default function ProgressCircles() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
        { label: 'Focus Time', value: 85 },
        { label: 'Task Completion', value: 92 },
        { label: 'Productivity Score', value: 88 },
        { label: 'Goal Progress', value: 75 }
      ].map((metric, i) => (
        <div key={i} className="text-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="6"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#00F5D4"
                strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 45 * metric.value / 100} ${2 * Math.PI * 45 * (100 - metric.value) / 100}`}
                className="opacity-60"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-thin">{metric.value}%</span>
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 uppercase tracking-wider">{metric.label}</p>
        </div>
      ))}
    </div>
  )
} 