import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Cities from './components/Cities'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background flair */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]"></div>

      <Navbar />
      <Hero />
      <Courses />
      <Cities />
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
            <p className="text-sm">© {new Date().getFullYear()} Parkour Kids. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutz</a>
              <a href="#" className="hover:text-white">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
