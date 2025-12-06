import { TenseId } from '../../../../types';

export const verb = 'dar';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo doy un regalo a mi madre.",
      "Tú das consejos muy buenos.",
      "Él da de comer al perro.",
      "Nosotros damos una fiesta el sábado.",
      "Vosotros dais las gracias por la ayuda.",
      "Ellos dan un paseo por el parque."
    ],
    [TenseId.PRETERITE]: [
      "Yo di una vuelta por el barrio.",
      "Tú diste en el clavo.",
      "Él dio un discurso emocionante.",
      "Nosotros dimos dinero a la caridad.",
      "Vosotros disteis un susto a María.",
      "Ellos dieron la bienvenida a los invitados."
    ],
    [TenseId.IMPERFECT]: [
      "Yo daba clases de inglés.",
      "Tú dabas siempre lo mejor de ti.",
      "Él daba paseos largos por la playa.",
      "Nosotros dábamos comida a los pájaros.",
      "Vosotros dabais muchos problemas.",
      "Ellos daban fiestas todos los fines de semana."
    ],
    [TenseId.FUTURE]: [
      "Yo daré una fiesta el sábado.",
      "Tú darás una buena impresión.",
      "Él dará su opinión al respecto.",
      "Nosotros daremos lo mejor de nosotros.",
      "Vosotros daréis un paseo mañana.",
      "Ellos darán dinero a los pobres."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo daría todo por ti.",
      "Tú darías miedo con ese disfraz.",
      "Él daría cualquier cosa por ir.",
      "Nosotros daríamos una vuelta si no lloviera.",
      "Vosotros daríais las gracias si fuerais educados.",
      "Ellos darían saltos de alegría."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo dé una buena charla.",
      "Quiero que tú des un buen consejo.",
      "Es posible que él dé el discurso.",
      "Ojalá nosotros demos una buena impresión.",
      "Dudo que vosotros deis la talla.",
      "Es necesario que ellos den su opinión."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Da gracias!",
      "Dé su opinión, por favor.",
      "Demos un aplauso.",
      "Dad un paso adelante.",
      "Den un paso adelante."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo diera más, me quedaría sin nada.",
      "Quería que tú me dieras una oportunidad.",
      "No creía que él diera problemas.",
      "Si nosotros diéramos dinero, ayudaríamos.",
      "Dudaba que vosotros dierais las gracias.",
      "Era necesario que ellos dieran su opinión."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he dado todo por este proyecto.",
      "Tú has dado en el clavo.",
      "Ella ha dado una conferencia.",
      "Nosotros hemos dado un paseo.",
      "Vosotros habéis dado mucho de qué hablar.",
      "Ellos han dado su consentimiento."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había dado todo.",
      "Tú habías dado mucho.",
      "Ella había dado una fiesta.",
      "Nosotros habíamos dado.",
      "Vosotros habíais dado.",
      "Ellos habían dado."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré dado mi opinión.",
      "Tú habrás dado el regalo.",
      "Ella habrá dado a luz.",
      "Nosotros habremos dado.",
      "Vosotros habréis dado.",
      "Ellos habrán dado."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría dado más.",
      "Tú habrías dado menos.",
      "Ella habría dado las gracias.",
      "Nosotros habríamos dado.",
      "Vosotros habríais dado.",
      "Ellos habrían dado."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya dado.",
      "Dudo que tú hayas dado.",
      "Es posible que ella haya dado.",
      "Ojalá nosotros hayamos dado.",
      "No creo que vosotros hayáis dado.",
      "Es bueno que ellos hayan dado."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera dado, recibiría.",
      "Si tú hubieras dado, tendrías.",
      "Si ella hubiera dado, sería feliz.",
      "Si nosotros hubiéramos dado, ayudaríamos.",
      "Si vosotros hubierais dado, veríais.",
      "Si ellos hubieran dado, sabrían."
    ]
  };

export default data;
