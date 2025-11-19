const offers = [
  {
    title: 'Feriencamps',
    desc: 'Actionreiche 5-Tage-Parkourcamps mit Spiel, Technik und Teamspirit.',
    badge: 'Beliebt',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Einsteigerkurse',
    desc: 'Der sichere Start in Parkour: Fallen, Rollen, Springen – spielerisch lernen.',
    badge: 'Neu',
    color: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Fortgeschrittene',
    desc: 'Saubere Technik, Flow und kreative Lines – mit erfahrenen Coaches.',
    badge: 'Level Up',
    color: 'from-violet-500 to-indigo-500',
  },
]

function Courses() {
  return (
    <section id="courses" className="relative py-20 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Unsere Angebote</h2>
          <p className="mt-2 text-white/70">Spielerische Bewegung, moderne Pädagogik und eine Community zum Wohlfühlen.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div key={o.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20">
                {o.badge}
              </span>
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${o.color} shadow-lg`}></div>
              <h3 className="mt-4 text-xl font-semibold text-white">{o.title}</h3>
              <p className="mt-1 text-white/70">{o.desc}</p>
              <a href="#book" className="mt-4 inline-flex items-center text-emerald-300 group-hover:translate-x-1 transition">Mehr erfahren →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
