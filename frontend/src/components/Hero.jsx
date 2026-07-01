import { motion } from 'framer-motion'
import worldMap from '../assets/world-map.svg'

export default function Hero({ onCtaClick }) {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-10 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-900 via-slate-950 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-200 ring-1 ring-cyan-500/20">
            AI-Government Analytics • World Development
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Powered Human Development Index Predictor
          </h2>
          <p className="mt-6 max-w-xl text-slate-300 sm:text-lg">
            Predict HDI scores with a modern analytics dashboard built for actionable development insights. Optimize policy decisions using education, health, and economic indicators.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
            >
              🚀 Predict Development Index
            </button>
            <a href="#insights" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-600">
              Explore Insights
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { value: '195', label: 'Countries' },
              { value: '98.56%', label: 'Accuracy' },
              { value: 'Gradient Boosting', label: 'Model' },
              { value: '4', label: 'Indicators' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative max-w-xl rounded-[2rem] border border-slate-800/80 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40"
        >
          <img src={worldMap} alt="World map illustration" className="h-auto w-full rounded-3xl object-cover" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-5 text-slate-100 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">Global Coverage</p>
              <p className="mt-3 text-2xl font-semibold">195 Countries</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 text-slate-100 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">HDI Accuracy</p>
              <p className="mt-3 text-2xl font-semibold">98.6%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
