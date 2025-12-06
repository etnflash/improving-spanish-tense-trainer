import { TenseId } from '../../../../types';

export const verb = 'hablar';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo hablo español con mis amigos todos los días.",
      "Tú hablas muy rápido cuando estás nervioso.",
      "Él habla tres idiomas fluidamente.",
      "Nosotros hablamos sobre el proyecto de ciencias.",
      "Vosotros habláis mucho en clase.",
      "Ellos hablan con el profesor después de la escuela."
    ],
    [TenseId.PRETERITE]: [
      "Yo hablé con mi madre ayer por teléfono.",
      "Tú hablaste muy bien en la presentación.",
      "Ella habló con el jefe sobre el aumento.",
      "Nosotros hablamos durante horas anoche.",
      "Vosotros hablasteis del viaje la semana pasada.",
      "Ellos hablaron en voz baja durante la película."
    ],
    [TenseId.IMPERFECT]: [
      "Yo hablaba francés cuando era niño.",
      "Tú hablabas con tu abuela todos los domingos.",
      "Él hablaba mucho en clase antes.",
      "Nosotros hablábamos de nuestros sueños a menudo.",
      "Vosotros hablabais por teléfono cada noche.",
      "Ellos hablaban mientras caminaban por el parque."
    ],
    [TenseId.FUTURE]: [
      "Yo hablaré con el director mañana mismo.",
      "Tú hablarás mejor español en unos meses.",
      "Él hablará en la conferencia internacional.",
      "Nosotros hablaremos de esto más tarde.",
      "Vosotros hablaréis con vuestros padres pronto.",
      "Ellos hablarán sobre el contrato la próxima semana."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo hablaría con ella si tuviera su número.",
      "Tú hablarías más si no fueras tan tímido.",
      "Él hablaría con el jefe si fuera necesario.",
      "Nosotros hablaríamos horas sin parar.",
      "Vosotros hablaríais de fútbol todo el día.",
      "Ellos hablarían maravillas de este lugar."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es importante que yo hable con sinceridad.",
      "Quiero que tú hables con él.",
      "Dudo que él hable chino.",
      "Es necesario que nosotros hablemos bajo.",
      "Prefiero que vosotros habléis ahora.",
      "Espero que ellos hable pronto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Habla más alto, por favor!",
      "Hable usted con el encargado.",
      "Hablemos de otra cosa.",
      "Hablad con respeto.",
      "Hablen ustedes primero."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo hablara inglés, viajaría más.",
      "Me gustaría que tú hablaras con él.",
      "Dudaba que él hablara en serio.",
      "Si nosotros habláramos más, nos entenderíamos.",
      "Ojalá vosotros hablarais con la verdad.",
      "Era necesario que ellos hablaran claro."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he hablado con el director.",
      "Tú has hablado demasiado hoy.",
      "Él ha hablado muy bien de ti.",
      "Nosotros hemos hablado del tema.",
      "Vosotros habéis hablado por horas.",
      "Ellos han hablado con sus abogados."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había hablado con ella antes.",
      "Tú habías hablado de eso.",
      "Él había hablado con su jefe.",
      "Nosotros habíamos hablado por teléfono.",
      "Vosotros habíais hablado claro.",
      "Ellos habían hablado en la reunión."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré hablado con él para entonces.",
      "Tú habrás hablado con tu madre.",
      "Él habrá hablado en la conferencia.",
      "Nosotros habremos hablado del tema.",
      "Vosotros habréis hablado con todos.",
      "Ellos habrán hablado con el abogado."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría hablado si pudiera.",
      "Tú habrías hablado mejor.",
      "Él habría hablado con gusto.",
      "Nosotros habríamos hablado horas.",
      "Vosotros habríais hablado antes.",
      "Ellos habrían hablado de política."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya hablado bien.",
      "Dudo que tú hayas hablado con él.",
      "Es posible que él haya hablado.",
      "Ojalá nosotros hayamos hablado suficiente.",
      "No creo que vosotros hayáis hablado.",
      "Es bueno que ellos hayan hablado."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera hablado, sabrían la verdad.",
      "Si tú hubieras hablado, te habrían escuchado.",
      "Si él hubiera hablado, todo sería diferente.",
      "Si nosotros hubiéramos hablado, no habría problemas.",
      "Si vosotros hubierais hablado, estaríamos bien.",
      "Si ellos hubieran hablado, habríamos entendido."
    ]
  };

export default data;
