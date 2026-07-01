import { MODEL_METADATA } from '../config/metrics'

const stats = [
  {
    label: 'Countries',
    value: MODEL_METADATA.datasetSize,
    description: 'Cleaned dataset size',
  },
  {
    label: 'Model Accuracy',
    value: `${MODEL_METADATA.accuracy.toFixed(2)}%`,
    description: 'Validation R² score',
  },
  {
    label: 'Features Used',
    value: MODEL_METADATA.featureCount,
    description: 'Input indicators used',
  },
  {
    label: 'Model',
    value: MODEL_METADATA.modelName,
    description: 'Trained algorithm',
  },
]

export default function StatsSection() {
  return (
    <section className="grid gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">{stat.label}</p>
          <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          <p className="mt-2 text-sm text-slate-400">{stat.description}</p>
        </div>
      ))}
    </section>
  )
}
