const features = [
  { label: 'Life Expectancy', value: 95 },
  { label: 'Education', value: 82 },
  { label: 'Income', value: 74 },
  { label: 'Mean Schooling', value: 65 },
]

export default function FeatureImportance() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Feature Importance</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Input Indicator Impact</h3>
        </div>
      </div>
      <div className="space-y-5">
        {features.map((feature) => (
          <div key={feature.label} className="grid gap-2">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{feature.label}</span>
              <span>{feature.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-500" style={{ width: `${feature.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
