// Footer.jsx
import React from "react";

const phrases = [
  // 💪 Crecimiento personal
  "Grow through what you go through.\n(Crece a través de lo que atraviesas.)",
  "Mistakes are proof that you are trying.\n(Los errores son prueba de que lo estás intentando.)",
  "Be better, not bitter.\n(Sé mejor, no amargado.)",
  "You are your only limit.\n(Tú eres tu único límite.)",
  "Small steps still move you forward.\n(Los pasos pequeños también te hacen avanzar.)",

  // 💭 Mente y emociones
  "Your mind is a garden. What will you grow?\n(Tu mente es un jardín. ¿Qué vas a cultivar?)",
  "Worrying won’t change the outcome.\n(Preocuparte no cambiará el resultado.)",
  "Peace begins with a deep breath.\n(La paz comienza con una respiración profunda.)",
  "Feelings are visitors. Let them come and go.\n(Los sentimientos son visitantes. Déjalos entrar y salir.)",
  "Silence can speak louder than words.\n(El silencio puede hablar más fuerte que las palabras.)",

  // ❤️ Amor y empatía
  "Kindness is never wasted.\n(La bondad nunca se desperdicia.)",
  "Love grows when shared.\n(El amor crece cuando se comparte.)",
  "See with your heart, not just your eyes.\n(Mira con el corazón, no solo con los ojos.)",
  "Everyone is fighting a battle you can’t see.\n(Todos están luchando una batalla que no puedes ver.)",
  "Hurt people often hurt people.\n(Las personas heridas suelen herir a otros.)",

  // 🔍 Reflexión
  "What you focus on grows.\n(En lo que te enfocas, crece.)",
  "Change is hard, but staying stuck is harder.\n(Cambiar es difícil, pero quedarse estancado lo es más.)",
  "Time is the only thing you can’t get back.\n(El tiempo es lo único que no puedes recuperar.)",
  "Not all storms come to destroy. Some clear the path.\n(No todas las tormentas vienen a destruir. Algunas despejan el camino.)",
  "The truth is simple, but not always easy.\n(La verdad es simple, pero no siempre fácil.)",

  // 🌎 Vida y mundo
  "Life is short. Make it sweet.\n(La vida es corta. Hazla dulce.)",
  "Your story matters.\n(Tu historia importa.)",
  "The world needs your light.\n(El mundo necesita tu luz.)",
  "Every day is a second chance.\n(Cada día es una segunda oportunidad.)",
  "Dream big. Start small. Act now.\n(Sueña en grande. Empieza pequeño. Actúa ahora.)",

  // 🌟 Motivación
  "Believe you can, and you're halfway there.\n(Cree que puedes, y ya estás a mitad del camino.)",
  "Do it with passion or not at all.\n(Hazlo con pasión o no lo hagas.)",
  "You don’t need to be perfect to be amazing.\n(No necesitas ser perfecto para ser increíble.)",
  "Don’t wait for the right moment. Create it.\n(No esperes el momento adecuado. Créalo.)",
  "Your future starts today.\n(Tu futuro empieza hoy.)"
];

const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center p-4 mt-5">
      {/* Si quieres que el \n se vea como salto real, añade la clase 'whitespace-pre-line' de Tailwind
          o en CSS: .footer p { white-space: pre-line; } */}
      <p style={{ whiteSpace: "pre-line" }}>{randomPhrase}</p>
    </footer>
  );
};

export default Footer;
