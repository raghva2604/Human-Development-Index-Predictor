export default function Footer() {
  return (
    <footer className="rounded-[2rem] border border-white/10 bg-slate-950/80 px-8 py-8 text-slate-400 shadow-2xl shadow-slate-950/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>HDI Predictor • AI Analytics Platform</p>
        <p className="text-sm text-slate-500">Built with React, Tailwind, and Flask API</p>
      </div>
    </footer>
  )
}
