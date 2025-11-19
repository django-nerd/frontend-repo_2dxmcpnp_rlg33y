import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.2),transparent_50%)]"></div>

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Feriencamps & Kurse für Kids in Deutschland
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Parkour macht stark, mutig und mega viel Spaß
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Spielerisch die Stadt erobern, sicher springen lernen und neue Freunde finden. Unsere Coaches bringen
            Kindern moderne Bewegungskultur mit Spaß und Struktur näher.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#book" className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:brightness-110 transition">Jetzt Platz sichern</a>
            <a href="#courses" className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition">Kurse ansehen</a>
          </div>
          <p className="mt-4 text-xs text-white/60">
            Für Kinder von 6–14 Jahren • Alle Levels • Schnuppern möglich
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
