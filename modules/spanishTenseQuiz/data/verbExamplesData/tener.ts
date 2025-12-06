import { TenseId } from '../../../../types';

export const verb = 'tener';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo tengo un perro y dos gatos.",
      "Tú tienes mucha suerte.",
      "Ella tiene una reunión importante hoy.",
      "Nosotros tenemos hambre.",
      "Vosotros tenéis que estudiar para el examen.",
      "Ellos tienen una casa en la montaña."
    ],
    [TenseId.PRETERITE]: [
      "Yo tuve un problema con el coche.",
      "Tú tuviste una buena idea.",
      "Ella tuvo que salir temprano.",
      "Nosotros tuvimos mucha suerte.",
      "Vosotros tuvisteis la oportunidad de viajar.",
      "Ellos tuvieron un accidente leve."
    ],
    [TenseId.IMPERFECT]: [
      "Yo tenía el pelo largo hace años.",
      "Tú tenías muchos juguetes.",
      "Él tenía miedo a la oscuridad.",
      "Nosotros teníamos una casa en el campo.",
      "Vosotros teníais razón en la discusión.",
      "Ellos tenían mucho dinero antes."
    ],
    [TenseId.FUTURE]: [
      "Yo tendré mucho trabajo mañana.",
      "Tú tendrás una sorpresa en tu cumpleaños.",
      "Ella tendrá un bebé pronto.",
      "Nosotros tendremos que esperar.",
      "Vosotros tendréis éxito en el futuro.",
      "Ellos tendrán que decidir ahora."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo tendría un perro si mi piso fuera más grande.",
      "Tú tendrías frío sin abrigo.",
      "Ella tendría cuidado en tu lugar.",
      "Nosotros tendríamos problemas si se enteran.",
      "Vosotros tendríais más amigos si fuerais amables.",
      "Ellos tendrían que haber llegado ya."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo tenga suerte.",
      "Ojalá que tú tengas éxito.",
      "Es necesario que ella tenga cuidado.",
      "Es importante que nosotros tengamos paciencia.",
      "Dudo que vosotros tengáis problemas.",
      "Es posible que ellos tengan miedo."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ten cuidado!",
      "Tenga un buen día.",
      "Tengamos fe.",
      "Tened paciencia.",
      "Tengan sus pasaportes listos."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo tuviera dinero, compraría un coche.",
      "Quería que tú tuvieras cuidado.",
      "No creía que él tuviera razón.",
      "Si nosotros tuviéramos tiempo, iríamos.",
      "Dudaba que vosotros tuvierais problemas.",
      "Era imposible que ellos tuvieran miedo."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he tenido un día largo.",
      "Tú has tenido mucha suerte.",
      "Ella ha tenido una buena idea.",
      "Nosotros hemos tenido que esperar.",
      "Vosotros habéis tenido paciencia.",
      "Ellos han tenido éxito."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había tenido un perro.",
      "Tú habías tenido suerte.",
      "Ella había tenido fiebre.",
      "Nosotros habíamos tenido problemas.",
      "Vosotros habíais tenido tiempo.",
      "Ellos habían tenido miedo."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré tenido hijos.",
      "Tú habrás tenido éxito.",
      "Ella habrá tenido cuidado.",
      "Nosotros habremos tenido noticias.",
      "Vosotros habréis tenido paciencia.",
      "Ellos habrán tenido oportunidades."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría tenido más dinero.",
      "Tú habrías tenido razón.",
      "Ella habría tenido un gato.",
      "Nosotros habríamos tenido que ir.",
      "Vosotros habríais tenido frío.",
      "Ellos habrían tenido hambre."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya tenido suerte.",
      "Dudo que tú hayas tenido tiempo.",
      "Es posible que ella haya tenido.",
      "Ojalá nosotros hayamos tenido.",
      "No creo que vosotros hayáis tenido.",
      "Es bueno que ellos hayan tenido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera tenido dinero, viajaría.",
      "Si tú hubieras tenido cuidado, no caerías.",
      "Si ella hubiera tenido tiempo, vendría.",
      "Si nosotros hubiéramos tenido suerte, ganaríamos.",
      "Si vosotros hubierais tenido paciencia, esperaríais.",
      "Si ellos hubieran tenido hambre, comerían."
    ]
  };

export default data;
