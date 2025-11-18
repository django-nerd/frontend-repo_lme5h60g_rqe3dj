export default function Showcase() {
  const items = [
    { title: 'Main Switchboards (MSB)', desc: 'High-capacity sections with segregated busbar systems and comprehensive protection.' },
    { title: 'Motor Control Centres (MCC)', desc: 'Form 3b and 4b designs with withdrawable options and robust thermal design.' },
    { title: 'Distribution Boards (DB)', desc: 'Compact, serviceable, and scalable for commercial and light industrial uses.' },
  ]

  return (
    <section id="capabilities" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Capabilities you can rely on</h2>
            <p className="mt-4 text-slate-600">We engineer and manufacture to the most demanding specifications, with complete design documentation and factory acceptance testing.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li>• Type-tested assemblies (TTA) to AS/NZS 61439</li>
              <li>• Form ratings up to 4b, IP ratings up to IP66</li>
              <li>• Busbar ratings up to 6300A with fault withstand</li>
              <li>• Arc fault containment options</li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {items.map((i) => (
              <div key={i.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900">{i.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{i.desc}</p>
              </div>
            ))}

            <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
              <h3 className="font-semibold text-blue-800">Standards & Compliance</h3>
              <p className="mt-2 text-blue-800/80 text-sm">Certified to AS/NZS 61439 with detailed compliance documentation, routine verification, and quality assurance across production.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
