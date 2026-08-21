import { ArrowUpRight, Mail, MapPin, Navigation } from 'lucide-react'
import Reveal from '../components/Reveal'
import { FacebookIcon, WhatsAppIcon } from '../components/icons'

const methods = [
  {
    name: 'WhatsApp',
    detail: 'Respuesta rápida el mismo día',
    href: 'https://wa.me/526251066847?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos',
    icon: <WhatsAppIcon className="h-6 w-6" />,
    bg: 'bg-[#25d366]',
  },
  {
    name: 'Facebook',
    detail: 'Click English Cuauhtémoc',
    href: 'https://www.facebook.com/CLICKENGLISHCUAUHTEMOC',
    icon: <FacebookIcon className="h-5 w-5" />,
    bg: 'bg-[#1877f2]',
  },
  {
    name: 'Correo',
    detail: 'clickenglishc@gmail.com',
    href: 'mailto:clickenglishc@gmail.com',
    icon: <Mail size={22} />,
    bg: 'bg-ink-950',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-2">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Contáctanos
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink-950 sm:text-5xl">
            ¿Listo para dar el{' '}
            <mark className="rounded-lg bg-brand-500 px-2 text-ink-950">siguiente paso</mark>?
          </h2>
          <p className="mt-5 leading-relaxed text-ink-700/80">
            Escríbenos por el canal que prefieras: resolvemos tus dudas sobre horarios, precios e
            inscripciones. ¡Te leemos!
          </p>

          <ul className="mt-10 space-y-4">
            {methods.map((m) => (
              <li key={m.name}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink-950/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${m.bg}`}
                  >
                    {m.icon}
                  </span>
                  <span>
                    <span className="block font-display font-bold text-ink-950">{m.name}</span>
                    <span className="block text-sm text-ink-700/70">{m.detail}</span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="ml-auto text-ink-700/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="relative h-full min-h-[480px]">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rotate-1 rounded-[2rem] border-2 border-brand-500/50"
            />
            <div className="relative h-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink-950/10">
              <iframe
                title="Ubicación de Click English Cuauhtémoc en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.467855695237!2d-106.87187682542483!3d28.405136475789554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1cb994415e593%3A0x58433557b238a6d9!2sClick%20English%20Cuauht%C3%A9moc!5e0!3m2!1ses-419!2sus!4v1750786130530!5m2!1ses-419!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-ink-950/5 backdrop-blur sm:flex-row sm:items-center">
                <img
                  src="/img/logo-icon.png"
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-ink-950/10"
                />
                <div className="min-w-0">
                  <p className="truncate font-display font-bold text-ink-950">
                    Click English Cuauhtémoc
                  </p>
                  <p className="flex items-center gap-1.5 text-sm text-ink-700/70">
                    <MapPin size={14} className="shrink-0 text-brand-600" />
                    Cuauhtémoc, Chihuahua
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Click+English+Cuauht%C3%A9moc"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-xl bg-ink-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-ink-800"
                >
                  <Navigation size={15} />
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
