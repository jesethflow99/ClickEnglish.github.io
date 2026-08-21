import { ArrowRight } from 'lucide-react'

export default function CourseCard({ curso, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-950/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink-950/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={curso.image}
          alt={curso.alt}
          width={880}
          height={660}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {curso.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-ink-950 shadow-lg">
            {curso.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {curso.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold text-ink-950">{curso.title}</h3>
          <p className="mt-0.5 text-sm font-medium text-brand-600">{curso.ages}</p>
        </div>

        <p className="text-sm leading-relaxed text-ink-700/80">{curso.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {curso.price.map((p) => (
            <div
              key={p.label}
              className="flex-1 basis-28 rounded-xl bg-paper px-3 py-2 ring-1 ring-ink-950/5"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-700/60">
                {p.label}
              </span>
              <span className="font-display text-lg font-bold text-ink-950">{p.value}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-ink-800"
        >
          Más información
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  )
}
