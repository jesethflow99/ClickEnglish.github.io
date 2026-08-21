import { Eye, Target } from 'lucide-react'
import Reveal from '../components/Reveal'
import filosofiaImg from '../assets/img/filosofia.webp'

const pillars = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Academia responsable de la enseñanza del idioma inglés, que proporciona a sus estudiantes los conocimientos lingüísticos necesarios para una mejor formación personal, académica y profesional, fomentando un ambiente seguro, tranquilo, alegre y con armonía para potenciar la consolidación de la interculturalidad.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser una academia líder y competitiva en la enseñanza del idioma inglés, comprometidos con la excelencia personal, académica y la calidad en el servicio, destacando en las estrategias y programas creativos y actualizados para las mejoras continuas.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <figure className="relative mx-auto max-w-xl">
            <div className="absolute -inset-3 -z-10 rotate-1 rounded-[2rem] border-2 border-brand-500/40" />
            <img
              src={filosofiaImg}
              alt="Alumnos de Click English practicando conversación"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </figure>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-500">
              Nuestra filosofía
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-5xl">
              Más que un idioma, una forma de pensar
            </h2>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal key={pillar.title} delay={200 + i * 100}>
                  <div className="flex gap-5 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500 text-ink-950">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{pillar.text}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
