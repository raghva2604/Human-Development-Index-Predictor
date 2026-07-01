import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const categoryLabel = (score) => {
  if (score >= 80) return 'Very High'
  if (score >= 70) return 'High'
  if (score >= 55) return 'Medium'
  return 'Low'
}

export default function GaugeChart({ value = 0 }) {
  const data = [{ name: 'HDI', value }]
  const label = categoryLabel(value)

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">HDI Gauge</p>
        <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.32em] text-slate-300">Score</span>
      </div>
      <div className="relative h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="90%" barSize={20} data={data} startAngle={180} endAngle={0}>
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={20} fill="#14b8a6" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center text-center">
          <p className="text-5xl font-semibold text-white">{(value / 100).toFixed(3)}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
          <p className="mt-1 text-xs text-slate-500">HDI Score</p>
        </div>
      </div>
    </div>
  )
}
