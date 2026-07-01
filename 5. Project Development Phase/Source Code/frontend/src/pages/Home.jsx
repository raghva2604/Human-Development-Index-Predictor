import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PredictionForm from '../components/PredictionForm'
import ResultCard from '../components/ResultCard'
import FeatureCards from '../components/FeatureCards'
import StatsSection from '../components/StatsSection'
import GaugeChart from '../components/GaugeChart'
import FeatureImportance from '../components/FeatureImportance'
import Insights from '../components/Insights'
import HistoryCard from '../components/HistoryCard'
import ExportButtons from '../components/ExportButtons'
import Footer from '../components/Footer'
import { predictHDI } from '../services/api'

export default function Home() {
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedHistory = localStorage.getItem('hdiPredictionHistory')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const saveHistory = (payload, response) => {
    const entry = {
      timestamp: new Date().toISOString(),
      country: payload.Country || 'N/A',
      life_expectancy: payload.Life_Expectancy,
      education: payload.Expected_Schooling,
      income: payload.GNI,
      hdi: Number(response.Predicted_HDI),
      category: response.Category,
    }

    const nextHistory = [entry, ...history].slice(0, 6)
    setHistory(nextHistory)
    localStorage.setItem('hdiPredictionHistory', JSON.stringify(nextHistory))
  }

  const handlePredict = async (payload) => {
    setLoading(true)
    setError(null)
    try {
      const response = await predictHDI(payload)
      setResult(response)
      saveHistory(payload, response)
    } catch (err) {
      setError(err.response?.data?.error || err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="space-y-16 px-6 pb-16 pt-10 lg:px-8">
        <Hero onCtaClick={() => document.getElementById('predict')?.scrollIntoView({ behavior: 'smooth' })} />
        <StatsSection />

        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.9fr]">
          <div className="space-y-8">
            <PredictionForm onSubmit={handlePredict} loading={loading} />
            {error && (
              <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5 text-sm text-red-100">
                {error}
              </div>
            )}
          </div>
          <ResultCard result={result} />
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-8">
            <GaugeChart value={result ? Number(result.Predicted_HDI) * 100 : 0} />
            <FeatureImportance />
          </div>
          <Insights result={result} />
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <HistoryCard history={history} />
          <ExportButtons history={history} />
        </div>

        <FeatureCards />
        <Footer />
      </main>
    </div>
  )
}
