function CTA() {
  return (
    <section id="book" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-center shadow-[0_10px_50px_-10px_rgba(0,0,0,0.4)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Bereit für das nächste Abenteuer?</h3>
          <p className="mt-2 text-white/70">Sichere dir jetzt einen Platz in deiner Stadt. Flexible Stornierung, Geschwisterrabatt und kostenlose Schnupperstunde.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#cities" className="inline-flex items-center rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-200 transition">Standort wählen</a>
            <a href="#courses" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">Angebote ansehen</a>
          </div>
          <p className="mt-3 text-xs text-white/50">Ab 199€ • Tägliche Betreuung • Zertifizierte Coaches</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
