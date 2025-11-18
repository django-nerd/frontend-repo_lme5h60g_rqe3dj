import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

      <div className="absolute top-6 right-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-blue-900 border border-blue-200">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-700" />
          <span className="text-sm font-medium">Navy Blue Theme</span>
        </div>
      </div>

      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Precision Low Voltage Switchboards
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-700">
              Engineered for safety, reliability, and scalability. Built to AS/NZS standards with meticulous attention to detail.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="inline-flex items-center justify-center rounded-md bg-blue-800 px-6 py-3 text-white shadow-sm hover:bg-blue-900 transition-colors">
                Request a Quote
              </a>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-50 transition-colors">
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
