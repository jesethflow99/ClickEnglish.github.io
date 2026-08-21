import { ArrowRight, Clock, GraduationCap, Sparkles, Users } from 'lucide-react'
import Reveal from '../components/Reveal'
import { WHATSAPP_URL } from '../data/cursos'

const marqueeItems = [
  '🎓 Curso de Verano 2027 · ¡inscripciones a partir de abril!',
  '✅ Inscripciones abiertas',
  '👥 Grupos reducidos',
  '📍 Cuauhtémoc, Chihuahua',
]

const trustItems = [
  { icon: Users, label: 'Grupos reducidos' },
  { icon: GraduationCap, label: 'Niños y adolescentes' },
  { icon: Clock, label: 'Horarios flexibles' },
]

function MarqueeRow({ hidden }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {marqueeItems.map((text) => (
        <span key={text} className="flex items-center whitespace-nowrap px-6 font-semibold">
          {text}
          <Sparkles size={14} className="ml-6 opacity-60" />
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <>
      <section id="inicio" className="relative flex min-h-svh flex-col overflow-hidden bg-ink-950">
        <img
          src="/img/hero.webp"
          alt=""
          width={1920}
          height={1443}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-400 sm:text-sm">
              <Sparkles size={14} />
              Academia de inglés · Cuauhtémoc, Chih.
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Aprende inglés <span className="text-brand-500">de verdad</span>, para toda la vida.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              En Click English preparamos a niños y adolescentes para la escuela con clases
              dinámicas, grupos reducidos y mucha práctica real de conversación.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cursos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/25 transition hover:bg-brand-400"
              >
                Ver cursos y precios
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
              {trustItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-center gap-2">
                    <Icon size={16} className="text-brand-500" />
                    {item.label}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="marquee border-y border-black/10 bg-brand-500 py-3 text-sm text-ink-950">
        <div className="animate-marquee flex w-max">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
    </>
  )
}
