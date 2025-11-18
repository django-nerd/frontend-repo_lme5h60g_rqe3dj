import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Factory, Settings, Gauge, CircuitBoard, Workflow, Sparkles, Bolt, Building2, Wrench, ClipboardCheck, Ruler, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  { icon: Factory, title: 'Main Switchboards (MSB)', desc: 'High-capacity assemblies up to 6300A with segregated busbar systems and verified fault withstand.', img: 'https://images.unsplash.com/photo-1581091019337-1d3a5f2fc6b0?auto=format&fit=crop&w=1200&q=60' },
  { icon: Settings, title: 'Motor Control Centres (MCC)', desc: 'Fixed and withdrawable designs, Form 3b/4b, VSD/soft starter integration, and thermal performance.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60' },
  { icon: Gauge, title: 'Distribution Boards (DB)', desc: 'Compact, serviceable, scalable boards for commercial and light industrial applications.', img: 'https://images.unsplash.com/photo-1581093588401-8d9a17f8b7c6?auto=format&fit=crop&w=1200&q=60' },
  { icon: CircuitBoard, title: 'Metering & Monitoring', desc: 'Revenue-grade metering, power quality analysers, and SCADA/BMS connectivity.', img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=60' },
  { icon: Workflow, title: 'Control & Automation', desc: 'PLC/RTU panels, I/O marshaling, network switches, and panel integration.', img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=60' },
  { icon: Sparkles, title: 'Power Factor Correction', desc: 'Automatic PFC banks with detuned reactors and harmonic compliance.', img: 'https://images.unsplash.com/photo-1602617123223-3e56b6c0b2ba?auto=format&fit=crop&w=1200&q=60' },
  { icon: Bolt, title: 'ATS & Generator Panels', desc: 'Automatic transfer switching, synchronising, and emergency power logic.', img: 'https://images.unsplash.com/photo-1536304108054-98e1f0a1e41d?auto=format&fit=crop&w=1200&q=60' },
  { icon: Building2, title: 'Bus Duct & Trunking', desc: 'Modular busway solutions for efficient distribution and fast installation.', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60' }
]

const services = [
  { icon: ClipboardCheck, title: 'Commissioning & FAT', desc: 'Routine verification, factory acceptance testing, and site commissioning support.', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60' },
  { icon: Wrench, title: 'Maintenance & Service', desc: 'Planned maintenance, thermal scanning, and rapid fault response.', img: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1200&q=60' },
  { icon: Ruler, title: 'Design & Drafting', desc: 'Detailed schematics, GA layouts, and full documentation packages.', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1200&q=60' },
  { icon: RefreshCw, title: 'Upgrades & Retrofits', desc: 'Protection upgrades, form rating changes, and safety enhancements.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60' }
]

function ArrowButton({ onClick, direction = 'left', label }) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 backdrop-blur text-slate-700 hover:text-blue-900 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
    >
      <Icon size={18} />
    </button>
  )
}

function Card({ icon: Icon, title, desc, img }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative shrink-0 w-[85%] sm:w-[55%] md:w-[42%] lg:w-[32%] xl:w-[28%] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white mr-6 last:mr-0 transition-all hover:shadow-lg"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Icon size={22} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">{title}</h4>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsServices() {
  const prodRef = useRef(null)
  const svcRef = useRef(null)
  const prodControls = useAnimation()
  const svcControls = useAnimation()

  const scrollByAmount = (ref, amount) => {
    if (!ref.current) return
    ref.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  // Drag/Swipe support using pointer events + framer inertia
  useEffect(() => {
    const makeDraggable = (el) => {
      if (!el) return
      let isDown = false
      let startX = 0
      let scrollLeft = 0

      const onDown = (e) => {
        isDown = true
        startX = e.pageX || (e.touches && e.touches[0].pageX) || 0
        scrollLeft = el.scrollLeft
        el.classList.add('cursor-grabbing')
      }

      const onLeaveUp = () => {
        isDown = false
        el.classList.remove('cursor-grabbing')
      }

      const onMove = (e) => {
        if (!isDown) return
        const x = e.pageX || (e.touches && e.touches[0].pageX) || 0
        const walk = (x - startX) * 1.2
        el.scrollLeft = scrollLeft - walk
      }

      el.addEventListener('mousedown', onDown)
      el.addEventListener('mouseleave', onLeaveUp)
      el.addEventListener('mouseup', onLeaveUp)
      el.addEventListener('mousemove', onMove)
      el.addEventListener('touchstart', onDown, { passive: true })
      el.addEventListener('touchend', onLeaveUp)
      el.addEventListener('touchmove', onMove, { passive: true })

      return () => {
        el.removeEventListener('mousedown', onDown)
        el.removeEventListener('mouseleave', onLeaveUp)
        el.removeEventListener('mouseup', onLeaveUp)
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('touchstart', onDown)
        el.removeEventListener('touchend', onLeaveUp)
        el.removeEventListener('touchmove', onMove)
      }
    }

    const cleanupA = makeDraggable(prodRef.current)
    const cleanupB = makeDraggable(svcRef.current)
    return () => {
      cleanupA && cleanupA()
      cleanupB && cleanupB()
    }
  }, [])

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Products & Services</h2>
          <p className="mt-4 text-slate-600">A comprehensive suite of low voltage solutions, designed for safety, reliability and lifecycle performance.</p>
        </div>

        {/* Products */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Products</h3>
            <div className="hidden sm:flex items-center gap-2">
              <ArrowButton label="Previous products" onClick={() => scrollByAmount(prodRef, -400)} />
              <ArrowButton label="Next products" direction="right" onClick={() => scrollByAmount(prodRef, 400)} />
            </div>
          </div>

          <motion.div
            className="mt-4 flex snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300/80 hover:scrollbar-thumb-slate-400 scrollbar-track-transparent select-none"
            ref={prodRef}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            aria-label="Products gallery"
          >
            {products.map((p) => (
              <Card key={p.title} icon={p.icon} title={p.title} desc={p.desc} img={p.img} />
            ))}
          </motion.div>

          {/* Mobile arrows */}
          <div className="mt-4 flex sm:hidden items-center justify-center gap-3">
            <ArrowButton label="Previous products" onClick={() => scrollByAmount(prodRef, -300)} />
            <ArrowButton label="Next products" direction="right" onClick={() => scrollByAmount(prodRef, 300)} />
          </div>
        </div>

        {/* Services */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Services</h3>
            <div className="hidden sm:flex items-center gap-2">
              <ArrowButton label="Previous services" onClick={() => scrollByAmount(svcRef, -400)} />
              <ArrowButton label="Next services" direction="right" onClick={() => scrollByAmount(svcRef, 400)} />
            </div>
          </div>

          <motion.div
            className="mt-4 flex snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300/80 hover:scrollbar-thumb-slate-400 scrollbar-track-transparent select-none"
            ref={svcRef}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            aria-label="Services gallery"
          >
            {services.map((s) => (
              <Card key={s.title} icon={s.icon} title={s.title} desc={s.desc} img={s.img} />
            ))}
          </motion.div>

          {/* Mobile arrows */}
          <div className="mt-4 flex sm:hidden items-center justify-center gap-3">
            <ArrowButton label="Previous services" onClick={() => scrollByAmount(svcRef, -300)} />
            <ArrowButton label="Next services" direction="right" onClick={() => scrollByAmount(svcRef, 300)} />
          </div>
        </div>
      </div>
    </section>
  )
}
