import { TenseId } from '../../../../types';

export const verb = 'ser';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo soy estudiante de medicina.",
      "Tú eres mi mejor amigo.",
      "Él es alto y muy inteligente.",
      "Nosotros somos hermanos.",
      "Vosotros sois de Argentina, ¿verdad?",
      "Ellos son muy amables con los turistas."
    ],
    [TenseId.PRETERITE]: [
      "Yo fui el ganador del concurso.",
      "Tú fuiste muy valiente.",
      "Él fue un gran líder.",
      "Nosotros fuimos los primeros en llegar.",
      "Vosotros fuisteis testigos.",
      "Ellos fueron muy generosos."
    ],
    [TenseId.IMPERFECT]: [
      "Yo era muy tímido de niño.",
      "Tú eras el más rápido de la clase.",
      "Ella era una gran cantante en su juventud.",
      "Nosotros éramos inseparables.",
      "Vosotros erais muy traviesos.",
      "Ellos eran vecinos nuestros."
    ],
    [TenseId.FUTURE]: [
      "Yo seré médico cuando sea grande.",
      "Tú serás un gran artista.",
      "Ella será la próxima presidenta.",
      "Nosotros seremos amigos para siempre.",
      "Vosotros seréis bienvenidos siempre.",
      "Ellos serán famosos algún día."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo sería más feliz si tuviera vacaciones.",
      "Tú serías perfecto para este trabajo.",
      "Ella sería una buena madre.",
      "Nosotros seríamos un gran equipo.",
      "Vosotros seríais capaces de hacerlo.",
      "Ellos serían buenos candidatos."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "No importa quién yo sea.",
      "Espero que tú seas feliz.",
      "Es posible que ella sea la elegida.",
      "Es importante que nosotros seamos honestos.",
      "Quiero que vosotros seáis puntuales.",
      "Dudo que ellos sean culpables."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Sé tú mismo!",
      "Sea amable con los demás.",
      "Seamos realistas.",
      "Sed valientes.",
      "Sean bienvenidos a mi casa."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo fuera rico, viajaría por el mundo.",
      "Quería que tú fueras mi amigo.",
      "No creía que eso fuera verdad.",
      "Si nosotros fuéramos valientes, lo haríamos.",
      "Me gustaría que vosotros fuerais sinceros.",
      "Dudaba que ellos fueran capaces."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he sido muy feliz aquí.",
      "Tú has sido un buen estudiante.",
      "Ella ha sido amable conmigo.",
      "Nosotros hemos sido amigos por años.",
      "Vosotros habéis sido muy pacientes.",
      "Ellos han sido los primeros en llegar."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había sido profesor antes.",
      "Tú habías sido muy amable.",
      "Ella había sido la mejor.",
      "Nosotros habíamos sido amigos.",
      "Vosotros habíais sido testigos.",
      "Ellos habían sido informados."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré sido olvidado.",
      "Tú habrás sido ascendido.",
      "Ella habrá sido madre.",
      "Nosotros habremos sido felices.",
      "Vosotros habréis sido los elegidos.",
      "Ellos habrán sido descubiertos."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría sido médico.",
      "Tú habrías sido un buen padre.",
      "Ella habría sido famosa.",
      "Nosotros habríamos sido ricos.",
      "Vosotros habríais sido libres.",
      "Ellos habrían sido castigados."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya sido útil.",
      "Dudo que tú hayas sido sincero.",
      "Es posible que ella haya sido.",
      "Ojalá nosotros hayamos sido justos.",
      "No creo que vosotros hayáis sido.",
      "Es bueno que ellos hayan sido honestos."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera sido valiente, lo haría.",
      "Si tú hubieras sido más rápido, ganarías.",
      "Si ella hubiera sido amable, tendría amigos.",
      "Si nosotros hubiéramos sido listos, tendríamos dinero.",
      "Si vosotros hubierais sido puntuales, entraríais.",
      "Si ellos hubieran sido cuidadosos, no pasaría."
    ]
  };

export default data;
