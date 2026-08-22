import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import CourseModal from '../components/CourseModal'
import Reveal from '../components/Reveal'
import { cursos } from '../data/cursos'

export default function Courses() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="cursos" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
            Nuestros cursos
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink-950 sm:text-5xl">
            Encuentra el ideal{' '}
            <mark className="rounded-lg bg-brand-500 px-2 text-ink-950">para ti</mark>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-700/80">
            Cursos para todas las edades y objetivos: desde los primeros juegos en inglés hasta la
            preparación para la secundaria, la prepa, universidad y los exámenes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso, i) => (
            <Reveal key={curso.id} delay={(i % 3) * 90} className="h-full">
              <CourseCard curso={curso} onOpen={() => setSelected(curso)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <CourseModal curso={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
