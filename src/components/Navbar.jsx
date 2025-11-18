import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-slate-700 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-rose-600 shadow-sm" />
            <span className="font-semibold tracking-tight text-slate-900">Voltix Switchboards</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#capabilities">Capabilities</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#quote"
              className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700 transition-colors"
            >
              Request a Quote
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70">
          <div className="px-4 py-3 space-y-3 bg-white">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#capabilities">Capabilities</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#quote"
              className="inline-flex w-full items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
