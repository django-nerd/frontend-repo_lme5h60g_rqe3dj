import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBand() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Layers moving at different speeds
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -80])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -140])
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -220])

  return (
    <section ref={ref} aria-label="Parallax visual" className="relative isolate overflow-hidden">
      <div className="relative h-[50vh] sm:h-[60vh] w-full">
        {/* Background layer image */}
        <motion.div style={{ y: yBg }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
        </motion.div>

        {/* Mid layer decorative grid */}
        <motion.div style={{ y: yMid }} className="absolute inset-0 opacity-50">
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
        <motion.div style={{ y: yFg }} className="relative h-full flex items-center">
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
