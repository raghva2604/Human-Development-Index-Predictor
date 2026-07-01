import { useState } from 'react'

const initialState = {
  Country: '',
  Life_Expectancy: '',
  Expected_Schooling: '',
  Mean_Schooling: '',
  GNI: '',
}

const fields = [
  {
    label: 'Country (optional)',
    name: 'Country',
    type: 'text',
    placeholder: 'India',
    optional: true,
  },
  {
    label: 'Life Expectancy',
    name: 'Life_Expectancy',
    type: 'number',
    placeholder: '82.5',
    min: 40,
    max: 90,
    step: '0.1',
  },
  {
    label: 'Expected Schooling',
    name: 'Expected_Schooling',
    type: 'number',
    placeholder: '18',
    min: 5,
    max: 25,
    step: '0.1',
  },
  {
    label: 'Mean Schooling',
    name: 'Mean_Schooling',
    type: 'number',
    placeholder: '13',
    min: 2,
    max: 18,
    step: '0.1',
  },
  {
    label: 'GNI',
    name: 'GNI',
    type: 'number',
    placeholder: '60000',
    min: 500,
    max: 100000,
    step: '1',
  },
]

const validateField = (name, value) => {
  if (name === 'Country') return null
  if (!value && value !== 0) {
    return `${name.replace('_', ' ')} is required.`
  }
  const numeric = Number(value)
  if (Number.isNaN(numeric)) {
    return `${name.replace('_', ' ')} must be a number.`
  }

  if (name === 'Life_Expectancy' && (numeric < 40 || numeric > 90)) {
    return 'Life Expectancy must be between 40 and 90.'
  }
  if (name === 'Expected_Schooling' && (numeric < 5 || numeric > 25)) {
    return 'Expected Schooling must be between 5 and 25.'
  }
  if (name === 'Mean_Schooling' && (numeric < 2 || numeric > 18)) {
    return 'Mean Schooling must be between 2 and 18.'
  }
  if (name === 'GNI' && (numeric < 500 || numeric > 100000)) {
    return 'GNI must be between 500 and 100000.'
  }
  return null
}

export default function PredictionForm({ onSubmit, loading }) {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = fields
      .map((field) => ({ name: field.name, error: validateField(field.name, form[field.name]) }))
      .filter((item) => item.error)

    if (errors.length > 0) {
      setError(errors[0].error)
      return
    }

    onSubmit({
      Country: form.Country.trim(),
      Life_Expectancy: Number(form.Life_Expectancy),
      Expected_Schooling: Number(form.Expected_Schooling),
      Mean_Schooling: Number(form.Mean_Schooling),
      GNI: Number(form.GNI),
    })
  }

  return (
    <section id="predict" className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/90">Prediction Form</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">Enter development inputs</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-left text-slate-200">
            <span className="text-sm uppercase tracking-[0.22em] text-slate-400">{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              min={field.min}
              max={field.max}
              step={field.step}
              className="rounded-3xl border border-slate-700/80 bg-slate-950/90 px-4 py-4 text-lg text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/20"
            />
          </label>
        ))}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Analyzing HDI
              </>
            ) : (
              '🚀 Predict Development Index'
            )}
          </button>
          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
        </div>
      </form>
    </section>
  )
}
