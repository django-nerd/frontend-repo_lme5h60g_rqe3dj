import { motion } from 'framer-motion'
import { Factory, Settings, Gauge, CircuitBoard, Workflow, Sparkles, Bolt, Building2, Wrench, ClipboardCheck, Ruler, RefreshCw } from 'lucide-react'

const products = [
  { icon: Factory, title: 'Main Switchboards (MSB)', desc: 'High-capacity assemblies up to 6300A with segregated busbar systems and verified fault withstand.' },
  { icon: Settings, title: 'Motor Control Centres (MCC)', desc: 'Fixed and withdrawable designs, Form 3b/4b, VSD/soft starter integration, and thermal performance.' },
  { icon: Gauge, title: 'Distribution Boards (DB)', desc: 'Compact, serviceable, scalable boards for commercial and light industrial applications.' },
  { icon: CircuitBoard, title: 'Metering & Monitoring', desc: 'Revenue-grade metering, power quality analysers, and SCADA/BMS connectivity.' },
  { icon: Workflow, title: 'Control & Automation', desc: 'PLC/RTU panels, I/O marshaling, network switches, and panel integration.' },
  { icon: Sparkles, title: 'Power Factor Correction', desc: 'Automatic PFC banks with detuned reactors and harmonic compliance.' },
  { icon: Bolt, title: 'ATS & Generator Panels', desc: 'Automatic transfer switching, synchronising, and emergency power logic.' },
  { icon: Building2, title: 'Bus Duct & Trunking', desc: 'Modular busway solutions for efficient distribution and fast installation.' }
]

const services = [
  { icon: ClipboardCheck, title: 'Commissioning & FAT', desc: 'Routine verification, factory acceptance testing, and site commissioning support.' },
  { icon: Wrench, title: 'Maintenance & Service', desc: 'Planned maintenance, thermal scanning, and rapid fault response.' },
  { icon: Ruler, title: 'Design & Drafting', desc: 'Detailed schematics, GA layouts, and full documentation packages.' },
  { icon: RefreshCw, title: 'Upgrades & Retrofits', desc: 'Protection upgrades, form rating changes, and safety enhancements.' }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } }
}

export default function ProductsServices() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Products & Services</h2>
          <p className="mt-4 text-slate-600">A comprehensive suite of low voltage solutions, designed for safety, reliability and lifecycle performance.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Products</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {products.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/0 to-rose-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-11 w-11 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Services</h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 grid grid-cols-1 gap-6"
            >
              {services.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={item}
                  whileHover={{ x: 3 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-50/0 to-rose-100/0 group-hover:to-rose-100/60 transition-all" />
                  <div className="relative flex items-start gap-3">
                    <div className="h-9 w-9 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{title}</h4>
                      <p className="mt-1 text-sm text-slate-600">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
