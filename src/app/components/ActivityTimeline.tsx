export default function ActivityTimeline() {
  return (
    <div className="space-y-4">
      {[
        { time: '06:00', activity: 'Morning Routine', duration: '45m', progress: 80 },
        { time: '07:00', activity: 'Deep Work Session', duration: '2h', progress: 65 },
        { time: '10:00', activity: 'Team Sync', duration: '30m', progress: 90 },
        { time: '11:00', activity: 'Strategic Planning', duration: '1h', progress: 70 }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="w-12 text-[10px] text-zinc-400">{item.time}</div>
          <div className="flex-1 h-10 border border-zinc-900 rounded-lg bg-zinc-900/30 relative overflow-hidden group">
            <div 
              className="absolute inset-y-0 left-0 bg-[#00F5D4]/10 group-hover:bg-[#00F5D4]/20 transition-colors duration-300"
              style={{ width: `${item.progress}%` }}
            />
            <div className="absolute inset-0 flex items-center px-4">
              <span className="text-xs font-thin">{item.activity}</span>
              <span className="ml-auto text-[10px] text-zinc-400">{item.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 