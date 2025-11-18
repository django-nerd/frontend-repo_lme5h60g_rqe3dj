import { Shield, Cpu, Zap, GaugeCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Certified Safety',
    desc: 'Designed and tested to AS/NZS 61439 with full type-tested assemblies and documentation.'
  },
  {
    icon: Cpu,
    title: 'Smart Integration',
    desc: 'Seamless integration with BMS/SCADA, power monitoring, and metering solutions.'
  },
  {
    icon: Zap,
    title: 'Reliable Power',
    desc: 'High fault ratings, exceptional thermal management, and redundant protection options.'
  },
  {
    icon: GaugeCircle,
    title: 'Tailored to Spec',
    desc: 'Custom busbar systems, form ratings, ingress protection, and enclosure options.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Solutions built for mission-critical performance</h2>
          <p className="mt-4 text-slate-600">From industrial plants to commercial towers, our low voltage switchboards are engineered to perform under pressure.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-rose-200 transition-all">
              <div className="h-11 w-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:bg-rose-100">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
