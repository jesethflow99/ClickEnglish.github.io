import { useEffect, useRef } from 'react'
import { CalendarClock, X } from 'lucide-react'
import CourseInfo from './CourseInfo'
import { WhatsAppIcon } from './icons'

export default function CourseModal({ curso, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const whatsappHref = `https://wa.me/526251066847?text=${encodeURIComponent(
    `Hola, quiero más información sobre el curso: ${curso.title}`,
  )}`

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="curso-modal-title"
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
    >
      <div
        className="animate-fade-in absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="animate-modal-in relative max-h-[90svh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl">
        <div className="relative h-52 sm:h-64">
          <img
            src={curso.image}
            alt={curso.alt}
            width={880}
            height={660}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 text-white backdrop-blur transition hover:bg-ink-950"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 id="curso-modal-title" className="font-display text-2xl font-extrabold text-white">
              {curso.title}
            </h2>
            <p className="mt-1 text-sm font-semibold text-brand-400">
              {curso.ages} · {curso.level}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          {curso.note && (
            <div className="flex items-center gap-3 rounded-2xl border border-brand-600/30 bg-brand-500/10 p-4 text-sm font-semibold text-ink-900">
              <CalendarClock size={20} className="shrink-0 text-brand-600" />
              {curso.note}
            </div>
          )}

          <div className="rounded-2xl bg-ink-950 p-5 sm:p-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Precios
            </span>
            <div
              className={`mt-3 grid gap-4 ${
                curso.price.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {curso.price.map((p) => (
                <div key={p.label}>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">
                    {p.label}
                  </span>
                  <span className="font-display text-3xl font-extrabold text-brand-500">
                    {p.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-ink-950/10 pt-6">
            <CourseInfo info={curso.info} />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-base font-bold text-white transition hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Preguntar por este curso
          </a>
        </div>
      </div>
    </div>
  )
}
