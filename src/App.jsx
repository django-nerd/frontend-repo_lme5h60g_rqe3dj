import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import ProductsServices from './components/ProductsServices'
import ParallaxBand from './components/ParallaxBand'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ParallaxBand />
        <Features />
        <ProductsServices />
        <ParallaxBand />
        <Showcase />
        <Contact />
        <footer className="py-10 border-t border-slate-200 bg-white" id="quote">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Voltix Switchboards. All rights reserved.</p>
              <p className="text-slate-500 text-sm">Built with focus on safety, performance, and design integrity.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
