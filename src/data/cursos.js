import adolescentesImg from '../assets/img/cursos/adolescentes.webp'
import ninosImg from '../assets/img/cursos/ninos.webp'
import veranoImg from '../assets/img/cursos/verano.webp'
import sabatinoImg from '../assets/img/cursos/sabatino.webp'
import examenesImg from '../assets/img/cursos/examenes.webp'
import personalizadasImg from '../assets/img/cursos/personalizadas.webp'

export const WHATSAPP_URL =
  'https://wa.me/526251066847?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20cursos'

export const cursos = [
  {
    id: 'adolescentes',
    title: 'Adolescentes',
    ages: '12–17 años',
    level: 'Intermedio',
    duration: 'Todo el ciclo escolar',
    description:
      'Domina el inglés con confianza y fluidez para la escuela, los viajes y su futuro.',
    price: [
      { label: 'Inscripción', value: '$750' },
      { label: 'Mensualidad', value: '$850' },
    ],
    image: adolescentesImg,
    alt: 'Grupo de adolescentes practicando inglés en clase',
    info: '🚀 ¡Inglés que se vive, se habla y se domina! 🌍\n📚 En Click English Cuauhtémoc, nuestros cursos para adolescentes de 13 a 17 años están diseñados para llevar su inglés al siguiente nivel.\n🔎 En cada clase desarrollan habilidades clave que les abren puertas al mundo:\n\n🗣️ Speaking – Se expresan con naturalidad en temas actuales y de su interés.\n👂 Listening – Entienden diálogos reales, películas, canciones y mucho más.\n📖 Reading – Leen textos auténticos que enriquecen su vocabulario y comprensión.\n✍️ Writing – Redactan textos, correos y mensajes en inglés con claridad y estilo.\n💬 Conversation – Participan en debates, juegos de rol y presentaciones orales.\n🧠 Spelling – Fortalecen la escritura correcta a través de retos divertidos y efectivos.\n🎯 Nuestro enfoque es práctico, comunicativo y adaptado a su edad. Les damos las herramientas para que hablen con seguridad, comprendan mejor el mundo y se preparen para un futuro global.\n🔥 Ideal para quienes quieren mejorar su nivel escolar, viajar, certificar su inglés o simplemente hablarlo ¡sin miedo!',
  },
  {
    id: 'ninos',
    title: 'Niños',
    ages: '6–11 años',
    level: 'Principiante',
    duration: 'Todo el ciclo escolar',
    description:
      'Aprendizaje a través de juegos, canciones y actividades interactivas. Llegan a la secundaria con ventaja.',
    price: [
      { label: 'Inscripción', value: '$750' },
      { label: 'Mensualidad', value: '$850' },
    ],
    image: ninosImg,
    alt: 'Niños aprendiendo inglés con juegos y dinámicas',
    info: '🎓✨ ¡Prepara a tu hijo con seguridad y un excelente nivel de inglés! ✨🎓\n📍 En Click English Cuauhtémoc, ofrecemos un curso especial para niños, pensado para fortalecer sus bases y que inicien la secundaria con toda la confianza en su inglés.\n🚀 ¿Qué aprenden con nosotros?\n\n🗣️ Speaking – Se expresan en inglés con claridad y seguridad en conversaciones reales.\n👂 Listening – Entienden diálogos, instrucciones y contenido audiovisual de forma natural.\n📖 Reading – Leen textos sencillos con comprensión y amplían su vocabulario.\n✍️ Writing – Redactan oraciones y párrafos con buena estructura y ortografía.\n💬 Conversation – Practican situaciones reales a través de juegos de roles y dinámicas en grupo.\n🧠 Spelling – Mejoran su escritura y memorizan la ortografía con técnicas divertidas y efectivas.\n\n✅ Ventajas de tomar este curso:\n\n🔹 Llegarán a la secundaria con una base sólida, lo que les permitirá entender mejor sus clases y destacar en la materia.\n🔹 Aumentan su confianza y seguridad al hablar en público y participar en clase.\n🔹 Fomentamos el gusto por el idioma a través de actividades dinámicas, juegos y retos.\n🔹 Grupos reducidos, atención personalizada y seguimiento constante.\n🔹 Ideal para reforzar lo aprendido en la escuela y avanzar más allá del programa oficial.\n\n📅 ¡El momento de prepararlos es ahora!\n¡Inscríbelo y regálale una ventaja real para su futuro académico! 📚🌟',
  },
  {
    id: 'verano',
    title: 'Summer Camp 2027',
    ages: 'Preescolar, Primaria y Secundaria',
    level: 'Curso intensivo',
    duration: '15 horas intensivas',
    badge: 'Verano 2027',
    note: 'Inscripciones a partir de abril',
    description:
      'Dile adiós a la preocupación de no saber inglés y hola a la confianza antes de entrar a Secundaria o Prepa.',
    price: [{ label: 'Inscripción única', value: '$1500' }],
    image: veranoImg,
    alt: 'Alumnos del curso intensivo de verano',
    info: '🎓 ¡Curso Intensivo de Inglés para Secundaria o Prepa! 🎓\n\n¿Tu hij@ va a entrar a Secundaria o Prepa? ¡Este curso es para é/ella! 🚀\n👉 En solo unas semanas, los estudiantes:\n✅ Refrescan sus conocimientos previos 🧠\n✅ Refuerzan sus bases académicas 📘\n✅ Adquieren conocimientos clave que verán en secundaria 📚\n✅ Desarrollan habilidades esenciales como comprensión, vocabulario y conversación 🗣️\n✅ Ganan seguridad y confianza para este nuevo reto académico 💪\n🔍 Aprenden de forma dinámica y práctica temas fundamentales, como:\n📝 Construir oraciones y expresarse con claridad\n📖 Lectura y comprensión en inglés\n🎙️ Conversación para el aula y situaciones escolares\n💡 Vocabulario útil para las materias\n\n📚 Este curso los prepara no solo con contenidos, sino con la actitud y seguridad que necesitan para iniciar Secundaria o Prepa con el pie derecho. ✨🎒',
  },
  {
    id: 'sabatino',
    title: 'Curso Sabatino',
    ages: 'Kids & Teens',
    level: 'Básico – Intermedio',
    duration: 'Sábados al mes',
    description:
      'Sábados llenos de inglés, diversión y aprendizaje sin descuidar la rutina escolar.',
    price: [
      { label: 'Inscripción', value: '$750' },
      { label: 'Mensualidad', value: '$750' },
    ],
    image: sabatinoImg,
    alt: 'Estudiantes del curso sabatino de inglés',
    info: '🎉 ¡Sábados llenos de inglés, diversión y aprendizaje! 🎉\n🗓️ Curso sabatino para niños y adolescentes\n📍 En Click English Cuauhtémoc, los sábados se convierten en una experiencia educativa única, ideal para quienes quieren mejorar su inglés sin descuidar su rutina escolar.\n✨ ¿Qué aprenden con nosotros?\n\n🗣️ Speaking – Conversan con seguridad sobre temas cotidianos y actuales.\n👂 Listening – Desarrollan su oído con actividades basadas en canciones, diálogos y videos.\n📖 Reading – Leen textos breves que los ayudan a pensar en inglés.\n✍️ Writing – Escriben frases y párrafos usando vocabulario real.\n💬 Conversation – Practican inglés en situaciones reales con juegos de rol y actividades grupales.\n🧠 Spelling – Refuerzan su ortografía con dinámicas creativas y memorables.\n\n🎯 Cada sábado es una oportunidad para mejorar su nivel de inglés, hacer nuevos amigos y ganar confianza en un ambiente seguro, divertido y motivador.',
  },
  {
    id: 'examenes',
    title: 'Preparación para Exámenes',
    ages: 'Primaria, Secundaria, Prepa y Universidad',
    level: 'Todos los niveles',
    duration: 'Clases de 90 minutos',
    description:
      'Simulacros, estrategias y apoyo personalizado para enfrentar cualquier examen con confianza.',
    price: [
      { label: 'Por clase', value: '$350' },
      { label: 'Duración', value: '90 min' },
    ],
    image: examenesImg,
    alt: 'Alumna preparando su examen de inglés',
    info: '🎯 ¡Prepárate para tus exámenes con éxito y confianza!\n📚 En Click English Cuauhtémoc ofrecemos clases especializadas de Preparación para Exámenes, diseñadas para alumnos de Primaria, Secundaria y Preparatoria que desean mejorar su rendimiento académico en inglés.\n\n🧠 Nuestro curso está enfocado en fortalecer los temas clave que se evalúan en exámenes escolares, a través de una metodología práctica, clara y adaptada a cada nivel.\n🔎 ¿Qué ofrecemos?\n\n✅ Revisión de contenidos básicos y avanzados según el grado escolar.\n✅ Estrategias de comprensión de lectura y audio para responder con seguridad.\n✅ Práctica intensiva en Speaking, Listening, Reading, Writing y Spelling.\n✅ Simulacros de examen y ejercicios tipo prueba para ganar confianza.\n✅ Apoyo personalizado en temas específicos donde el alumno presenta dificultad.\n✅ Técnicas para mejorar la concentración, manejo del tiempo y organización de ideas.\n\n💡 Con este curso, los alumnos no solo mejoran sus resultados, también adquieren habilidades para enfrentar cualquier evaluación con claridad y confianza.\n\n🎓 ¡No esperes al último momento! Prepararse con tiempo es la clave del éxito.\n📅 Grupos activos todo el año y horarios flexibles.\n\n📍 Click English Cuauhtémoc – Donde los exámenes se enfrentan con preparación, no con preocupación.',
  },
  {
    id: 'personalizadas',
    title: 'Clases Personalizadas',
    ages: 'Todos los niveles',
    level: 'A tu ritmo',
    duration: 'Horarios flexibles',
    description:
      'Clases diseñadas a la medida: pronunciación, gramática, conversación o preparación de exámenes.',
    price: [
      { label: 'Por clase', value: '$350' },
      { label: 'Duración', value: '90 min' },
    ],
    image: personalizadasImg,
    alt: 'Clase personalizada de inglés uno a uno',
    info: '🎯 Clases Personalizadas de Inglés en Click English Cuauhtémoc\n✔️ Porque cada alumno aprende a su ritmo y con sus propios retos, ofrecemos clases personalizadas diseñadas para adaptarse a sus necesidades específicas.\n✨ Nuestro enfoque se basa en:\n\n🔍 Atender objetivos individuales – Ya sea mejorar la pronunciación, reforzar gramática, practicar conversación o prepararse para un examen.\n📚 Complementar lo que ya saben – Fortalecemos los temas básicos y avanzamos hacia lo complejo de forma clara, práctica y efectiva.\n🎓 Mejorar el aprendizaje real del idioma – Con actividades diseñadas según el estilo de aprendizaje de cada alumno.\n💬 En nuestras clases personalizadas, el alumno es el centro. Avanza con confianza, seguridad y el acompañamiento constante de nuestros docentes.\n\n📅 Agenda una clase y conoce cómo podemos ayudarte a alcanzar tus metas en inglés.',
  },
]
