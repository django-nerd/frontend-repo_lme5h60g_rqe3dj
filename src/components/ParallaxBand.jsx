import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxBand() {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Layers moving at different speeds (disabled if user prefers reduced motion)
  const yBg = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -80])
  const yMid = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -140])
  const yFg = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -220])

  return (
    <section ref={ref} aria-label="Parallax visual" className="relative isolate overflow-hidden">
      <div className="relative h-[50vh] sm:h-[60vh] w-full">
        {/* Background layer image */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 will-change-transform">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=70')"
            }}
          />
          <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
        </motion.div>

        {/* Mid layer decorative grid */}
        <motion.div style={{ y: yMid }} className="absolute inset-0 opacity-50 will-change-transform" aria-hidden>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgb(191 219 254)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </motion.div>

        {/* Foreground content */}
        <motion.div style={{ y: yFg }} className="relative h-full flex items-center will-change-transform">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-blue-900 border border-blue-200">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-700" />
                <span className="text-sm font-medium">Immersive visuals</span>
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Built for clarity, engineered for performance
              </h2>
              <p className="mt-3 text-blue-100/90">
                Subtle parallax motion guides the eye while keeping content crisp and accessible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Top/bottom gradient fades */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
      </div>
    </section>
  )
}
