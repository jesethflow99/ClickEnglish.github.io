import { Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { FacebookIcon, WhatsAppIcon } from '../components/icons'
import { WHATSAPP_URL } from '../data/cursos'

const phrases = [
  'Grow through what you go through.\n(Crece a través de lo que atraviesas.)',
  'Mistakes are proof that you are trying.\n(Los errores son prueba de que lo estás intentando.)',
  'Be better, not bitter.\n(Sé mejor, no amargado.)',
  'You are your only limit.\n(Tú eres tu único límite.)',
  'Small steps still move you forward.\n(Los pasos pequeños también te hacen avanzar.)',
  'Your mind is a garden. What will you grow?\n(Tu mente es un jardín. ¿Qué vas a cultivar?)',
  'Worrying won’t change the outcome.\n(Preocuparte no cambiará el resultado.)',
  'Peace begins with a deep breath.\n(La paz comienza con una respiración profunda.)',
  'Feelings are visitors. Let them come and go.\n(Los sentimientos son visitantes. Déjalos entrar y salir.)',
  'Silence can speak louder than words.\n(El silencio puede hablar más fuerte que las palabras.)',
  'Kindness is never wasted.\n(La bondad nunca se desperdicia.)',
  'Love grows when shared.\n(El amor crece cuando se comparte.)',
  'See with your heart, not just your eyes.\n(Mira con el corazón, no solo con los ojos.)',
  'Everyone is fighting a battle you can’t see.\n(Todos están luchando una batalla que no puedes ver.)',
  'Hurt people often hurt people.\n(Las personas heridas suelen herir a otros.)',
  'What you focus on grows.\n(En lo que te enfocas, crece.)',
  'Change is hard, but staying stuck is harder.\n(Cambiar es difícil, pero quedarse estancado lo es más.)',
  'Time is the only thing you can’t get back.\n(El tiempo es lo único que no puedes recuperar.)',
  'Not all storms come to destroy. Some clear the path.\n(No todas las tormentas vienen a destruir. Algunas despejan el camino.)',
  'The truth is simple, but not always easy.\n(La verdad es simple, pero no siempre fácil.)',
  'Life is short. Make it sweet.\n(La vida es corta. Hazla dulce.)',
  'Your story matters.\n(Tu historia importa.)',
  'The world needs your light.\n(El mundo necesita tu luz.)',
  'Every day is a second chance.\n(Cada día es una segunda oportunidad.)',
  'Dream big. Start small. Act now.\n(Sueña en grande. Empieza pequeño. Actúa ahora.)',
  'Believe you can, and you’re halfway there.\n(Cree que puedes, y ya estás a mitad del camino.)',
  'Do it with passion or not at all.\n(Hazlo con pasión o no lo hagas.)',
  'You don’t need to be perfect to be amazing.\n(No necesitas ser perfecto para ser increíble.)',
  'Don’t wait for the right moment. Create it.\n(No esperes el momento adecuado. Créalo.)',
  'Your future starts today.\n(Tu futuro empieza hoy.)',
]

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#contacto', label: 'Contacto' },
]

const socials = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: <WhatsAppIcon className="h-5 w-5" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/CLICKENGLISHCUAUHTEMOC',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: 'Correo',
    href: 'mailto:clickenglishc@gmail.com',
    icon: <Mail size={18} />,
  },
]

export default function Footer() {
  const [phrase] = useState(
    () => phrases[Math.floor(Math.random() * phrases.length)],
  )

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/img/logo-white.png"
              alt="Click English Cuauhtémoc"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 rounded-2xl ring-1 ring-white/15"
            />
            <span className="font-display leading-tight">
              <span className="block font-bold">Click English</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-brand-500">
                Cuauhtémoc
              </span>
            </span>
          </div>
          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-white/60">
            <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
            Academia de inglés para niños y adolescentes en Cuauhtémoc, Chihuahua.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-500 hover:text-ink-950"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/50">
            Explora
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-brand-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/50">
            Frase del día ✨
          </h3>
          <p className="mt-5 whitespace-pre-line text-sm italic leading-relaxed text-brand-300">
            {phrase}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Click English Cuauhtémoc · Todos los derechos reservados
      </div>
    </footer>
  )
}
