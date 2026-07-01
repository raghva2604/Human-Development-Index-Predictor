import { FiHeart, FiBookOpen, FiDollarSign, FiGlobe } from 'react-icons/fi'

const categories = {
  'Very High': [
    { icon: FiHeart, text: 'Healthcare outcomes are excellent.' },
    { icon: FiBookOpen, text: 'Education indicators are outstanding.' },
    { icon: FiDollarSign, text: 'Income supports sustained development.' },
    { icon: FiGlobe, text: 'Human development is at the top tier.' },
  ],
  High: [
    { icon: FiHeart, text: 'Healthcare is above average.' },
    { icon: FiBookOpen, text: 'Education quality is good.' },
    { icon: FiDollarSign, text: 'Economic growth is stable.' },
    { icon: FiGlobe, text: 'Development remains strong overall.' },
  ],
  Medium: [
    { icon: FiHeart, text: 'Healthcare access can be improved.' },
    { icon: FiBookOpen, text: 'Education needs stronger investment.' },
    { icon: FiDollarSign, text: 'Income indicators are moderate.' },
    { icon: FiGlobe, text: 'Policy support will raise development.' },
  ],
  Low: [
    { icon: FiHeart, text: 'Healthcare infrastructure needs attention.' },
    { icon: FiBookOpen, text: 'Education investment is required.' },
    { icon: FiDollarSign, text: 'Income growth is limited.' },
    { icon: FiGlobe, text: 'Development outcomes are still developing.' },
  ],
}

export default function Insights({ result }) {
  if (!result) {
    return null
  }

  const insightItems = categories[result.Category] || categories.Medium

  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/30">
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">AI Insights</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {insightItems.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 rounded-3xl bg-slate-900/60 p-4">
            <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
              <Icon size={18} />
            </span>
            <p className="text-sm text-slate-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
