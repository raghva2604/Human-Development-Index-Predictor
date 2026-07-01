export default function HistoryCard({ history }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Prediction History</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Latest Requests</h3>
        </div>
      </div>
      <div className="space-y-4">
        {history.map((entry, index) => (
          <div key={`${entry.timestamp}-${index}`} className="rounded-[1.25rem] border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Date</p>
                <p className="mt-1 text-sm text-slate-200">{new Date(entry.timestamp).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Country</p>
                <p className="mt-1 text-sm text-slate-200">{entry.country || 'N/A'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">HDI</p>
                <p className="mt-1 text-sm font-semibold text-white">{entry.hdi.toFixed(3)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Category</p>
                <p className="mt-1 text-sm text-cyan-300">{entry.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
