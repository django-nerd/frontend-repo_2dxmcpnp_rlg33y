import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 sm:px-6 mt-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500 shadow-lg"></div>
            <span className="text-white font-semibold tracking-tight">Parkour Kids</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#courses" className="hover:text-white transition-colors">Kurse</a>
            <a href="#cities" className="hover:text-white transition-colors">Städte</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#book" className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-slate-900 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:brightness-110 transition">Jetzt buchen</a>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
