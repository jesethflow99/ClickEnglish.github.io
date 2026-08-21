import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { WHATSAPP_URL } from '../data/cursos'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink-950/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/img/logo-icon.png"
            alt="Click English Cuauhtémoc"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl ring-1 ring-white/15"
          />
          <span className="font-display leading-tight">
            <span className="block text-sm font-bold tracking-wide text-white sm:text-base">
              Click English
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-brand-500">
              Cuauhtémoc
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-950 transition hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Inscríbete
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink-950/95 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-base font-bold text-ink-950"
          >
            <MessageCircle size={18} />
            Inscríbete por WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
