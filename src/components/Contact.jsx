import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — your request has been received. We will contact you shortly.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Start your project</h2>
            <p className="mt-4 text-slate-600">Tell us about your requirements — ratings, form, ingress protection, metering, and timelines.</p>

            <div className="mt-8 rounded-xl border border-slate-200 p-6">
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                <input className="rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Full name" required />
                <input className="rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/60" type="email" placeholder="Work email" required />
                <input className="rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Company" />
                <textarea rows={5} className="rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/60" placeholder="Project details (e.g., 3200A MSB, Form 4b, IP54, 65kA)" />
                <button className="inline-flex items-center justify-center rounded-md bg-blue-800 px-6 py-3 text-white shadow-sm hover:bg-blue-900 transition-colors">Send Request</button>
              </form>
              {status && <p className="mt-4 text-sm text-blue-800">{status}</p>}
            </div>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Why choose us</h3>
            <ul className="mt-4 space-y-3 text-slate-700 text-sm">
              <li>• Transparent documentation and drawings</li>
              <li>• Factory acceptance testing and commissioning support</li>
              <li>• Serviceability and lifecycle support</li>
              <li>• Local manufacturing and fast turnaround</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
