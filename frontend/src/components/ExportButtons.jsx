import { jsPDF } from 'jspdf'

export default function ExportButtons({ history }) {
  const handleExportCSV = () => {
    const csvHeader = ['timestamp,country,life_expectancy,education,income,hdi,category']
    const csvRows = history.map((entry) =>
      [
        entry.timestamp,
        entry.country || 'N/A',
        entry.life_expectancy,
        entry.education,
        entry.income,
        entry.hdi,
        entry.category,
      ].join(','),
    )
    const csv = [...csvHeader, ...csvRows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'hdi_prediction_history.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleExportPDF = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' })
    doc.setFontSize(16)
    doc.text('HDI Prediction History', 40, 40)
    doc.setFontSize(11)
    let y = 72

    if (history.length === 0) {
      doc.text('No history available to export.', 40, y)
    } else {
      doc.text('Date | Country | HDI | Category | Life Expectancy | Education | Income', 40, y)
      y += 22
      history.forEach((entry) => {
        const line = [
          new Date(entry.timestamp).toLocaleString(),
          entry.country || 'N/A',
          entry.hdi.toFixed(3),
          entry.category,
          entry.life_expectancy,
          entry.education,
          entry.income,
        ].join(' | ')
        doc.text(line, 40, y)
        y += 18
        if (y > 720) {
          doc.addPage()
          y = 40
        }
      })
    }

    doc.save('hdi_prediction_history.pdf')
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Export Data</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Download Predictions</h3>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            onClick={handleExportCSV}
          >
            ⬇ Export CSV
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            onClick={handleExportPDF}
          >
            📄 Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}
