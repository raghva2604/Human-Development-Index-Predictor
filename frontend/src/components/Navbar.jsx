import { FiGlobe, FiBookOpen, FiGithub } from 'react-icons/fi'

const links = [
  { label: 'Dashboard', href: '#home' },
  { label: 'Documentation', href: '#insights' },
  { label: 'GitHub', href: 'https://github.com', external: true },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-2 text-slate-100 sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-500 text-lg shadow-lg shadow-cyan-500/20">
            <FiGlobe />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">HDI Predictor</p>
            <h1 className="text-xl font-semibold tracking-tight text-white">AI-Powered Human Development Analytics</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="inline-flex items-center gap-2 rounded-full bg-slate-200/5 px-4 py-2 text-sm text-slate-100 ring-1 ring-slate-700 transition hover:bg-slate-800/80 hover:text-white">
          <FiBookOpen />
          Docs
        </button>
      </div>
    </header>
  )
}
