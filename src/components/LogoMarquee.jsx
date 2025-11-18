import { motion, useReducedMotion } from 'framer-motion'

const brands = [
  'Siemens',
  'Schneider',
  'ABB',
  'Eaton',
  'Rockwell',
  'Mitsubishi',
  'Omron',
  'Phoenix Contact',
  'Legrand',
  'LS Electric'
]

function BrandPill({ name }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-4 py-2 text-blue-900 shadow-sm backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default function LogoMarquee() {
  const prefersReducedMotion = useReducedMotion()

  // Duplicate list for seamless looping
  const row = (
    <div className="flex items-center gap-6 pr-6">
      {brands.map((b) => (
        <BrandPill key={b} name={b} />
      ))}
    </div>
  )

  if (prefersReducedMotion) {
    return (
      <section aria-label="Partner brands" className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-wider text-slate-500">Trusted component ecosystem</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {brands.map((b) => (
              <BrandPill key={b} name={b} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section aria-label="Partner brands" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-wider text-slate-500">Trusted component ecosystem</p>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            aria-hidden
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {row}
            {row}
            {row}
            {row}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
