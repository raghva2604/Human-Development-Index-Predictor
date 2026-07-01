export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="rounded-[2rem] border border-dashed border-slate-700/80 bg-slate-900/50 p-10 text-center text-slate-400">
        <p className="text-base">Submit the form to view HDI prediction results here.</p>
      </div>
    )
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-2xl shadow-slate-950/50">
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Prediction Result</p>
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-slate-400">HDI Score</p>
          <p className="mt-2 text-5xl font-semibold text-white">{result.Predicted_HDI}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/80 px-6 py-5 text-center ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Category</p>
            <p className="mt-3 text-2xl font-semibold text-cyan-300">{result.Category}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/80 px-6 py-5 text-center ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Confidence</p>
            <p className="mt-3 text-2xl font-semibold text-cyan-300">{result.Confidence}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5">
        <p className="text-sm text-slate-400">Model</p>
        <p className="mt-3 text-lg font-semibold text-white">{result.Model}</p>
        <div className="mt-4 text-sm text-slate-300">
          <p>Higher schooling and income strongly improve HDI.</p>
          <p>Use the model to compare policy scenarios quickly.</p>
        </div>
      </div>
    </div>
  )
}
