const cities = [
  { name: 'München', emoji: '🟡' },
  { name: 'Regensburg', emoji: '🔴' },
  { name: 'Nürnberg', emoji: '⚫️' },
  { name: 'Dresden', emoji: '🟣' },
  { name: 'Wiesbaden', emoji: '🟢' },
  { name: 'Stuttgart', emoji: '🔵' },
]

function Cities() {
  return (
    <section id="cities" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Wir sind in deiner Stadt</h2>
            <p className="mt-2 text-white/70">Aktuell bieten wir Kurse und Camps in diesen Regionen an.</p>
          </div>
          <a href="#book" className="hidden sm:inline-flex items-center rounded-full bg-white text-slate-900 font-semibold px-4 py-2 hover:bg-slate-200 transition">Jetzt buchen</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition">
              <div className="text-3xl mb-2">
                <span role="img" aria-label={c.name}>{c.emoji}</span>
              </div>
              <div className="text-white font-semibold">{c.name}</div>
              <a href="#book" className="opacity-0 group-hover:opacity-100 text-emerald-300 text-xs mt-1 inline-block transition">Platz sichern →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities
