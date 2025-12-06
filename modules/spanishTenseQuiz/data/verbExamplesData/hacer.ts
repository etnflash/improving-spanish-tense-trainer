import { TenseId } from '../../../../types';

export const verb = 'hacer';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo hago mi tarea antes de cenar.",
      "Tú haces mucho ruido cuando comes.",
      "Ella hace ejercicio en el gimnasio.",
      "Nosotros hacemos un pastel para el cumpleaños.",
      "Vosotros hacéis un buen trabajo.",
      "Ellos hacen planes para el fin de semana."
    ],
    [TenseId.PRETERITE]: [
      "Yo hice la cama esta mañana.",
      "Tú hiciste lo correcto.",
      "Él hizo una pregunta interesante.",
      "Nosotros hicimos un viaje inolvidable.",
      "Vosotros hicisteis mucho ruido anoche.",
      "Ellos hicieron un gran esfuerzo."
    ],
    [TenseId.IMPERFECT]: [
      "Yo hacía deporte todos los días.",
      "Tú hacías los deberes por la tarde.",
      "Él hacía reír a todos.",
      "Nosotros hacíamos castillos de arena.",
      "Vosotros hacíais siempre lo mismo.",
      "Ellos hacían cola para entrar."
    ],
    [TenseId.FUTURE]: [
      "Yo haré lo que sea necesario.",
      "Tú harás nuevos amigos en la escuela.",
      "Él hará una fiesta de despedida.",
      "Nosotros haremos un viaje a Italia.",
      "Vosotros haréis el examen mañana.",
      "Ellos harán un gran trabajo."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo haría cualquier cosa por ti.",
      "Tú harías lo mismo en mi lugar.",
      "Él haría más ejercicio si tuviera tiempo.",
      "Nosotros haríamos una pausa ahora.",
      "Vosotros haríais bien en escuchar.",
      "Ellos harían menos ruido si pudieran."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es importante que yo haga ejercicio.",
      "No quiero que tú hagas eso.",
      "Es posible que él haga una excepción.",
      "Esperan que nosotros hagamos el trabajo.",
      "Dudo que vosotros hagáis trampa.",
      "Es necesario que ellos hagan la cama."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Haz tu tarea!",
      "Haga lo que le digo.",
      "Hagamos un trato.",
      "Haced vuestro mejor esfuerzo.",
      "Hagan silencio, por favor."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo hiciera ejercicio, estaría más fuerte.",
      "Quería que tú hicieras la cama.",
      "No creía que él hiciera eso.",
      "Si nosotros hiciéramos un esfuerzo, ganaríamos.",
      "Dudaba que vosotros hicierais caso.",
      "Era necesario que ellos hicieran la tarea."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he hecho la cena.",
      "Tú has hecho un buen trabajo.",
      "Ella ha hecho muchas preguntas.",
      "Nosotros hemos hecho planes.",
      "Vosotros habéis hecho ruido.",
      "Ellos han hecho lo correcto."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había hecho la tarea.",
      "Tú habías hecho un dibujo.",
      "Ella había hecho una tarta.",
      "Nosotros habíamos hecho ruido.",
      "Vosotros habíais hecho planes.",
      "Ellos habían hecho amigos."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré hecho todo.",
      "Tú habrás hecho lo mejor.",
      "Ella habrá hecho el examen.",
      "Nosotros habremos hecho las paces.",
      "Vosotros habréis hecho el viaje.",
      "Ellos habrán hecho historia."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría hecho eso.",
      "Tú habrías hecho lo mismo.",
      "Ella habría hecho caso.",
      "Nosotros habríamos hecho una fiesta.",
      "Vosotros habríais hecho bien.",
      "Ellos habrían hecho daño."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya hecho bien.",
      "Dudo que tú hayas hecho eso.",
      "Es posible que ella haya hecho.",
      "Ojalá nosotros hayamos hecho.",
      "No creo que vosotros hayáis hecho.",
      "Es bueno que ellos hayan hecho."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera hecho caso, no pasaría.",
      "Si tú hubieras hecho la tarea, jugarías.",
      "Si ella hubiera hecho ejercicio, estaría fuerte.",
      "Si nosotros hubiéramos hecho planes, saldríamos.",
      "Si vosotros hubierais hecho silencio, oiríais.",
      "Si ellos hubieran hecho el trabajo, cobrarían."
    ]
  };

export default data;
