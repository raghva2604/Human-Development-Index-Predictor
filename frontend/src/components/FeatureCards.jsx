const cards = [
  {
    title: 'Trusted Insights',
    description: 'HDI predictions grounded in economic, health, and education signals.',
  },
  {
    title: 'Policy Score',
    description: 'Assess development performance across multiple dimensions.',
  },
  {
    title: 'Fast Predictions',
    description: 'Real-time model results with smooth analytics UI.',
  },
]

export default function FeatureCards() {
  return (
    <section id="insights" className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-500/20">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/90">Feature</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 text-slate-400">{card.description}</p>
        </article>
      ))}
    </section>
  )
}
