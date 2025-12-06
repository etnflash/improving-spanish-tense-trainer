import { TenseId } from '../../../../types';

export const verb = 'poner';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo pongo el libro en la mesa.",
      "Tú pones música para bailar.",
      "Usted pone azúcar en su café.",
      "Nosotros ponemos la televisión.",
      "Vosotros ponéis atención en clase.",
      "Ellos ponen las maletas en el coche."
    ],
    [TenseId.PRETERITE]: [
      "Yo puse las llaves en el cajón.",
      "Tú pusiste la mesa muy bonita.",
      "Él se puso el abrigo.",
      "Nosotros pusimos el cartel en la pared.",
      "Vosotros pusisteis mucho esfuerzo.",
      "Ellos pusieron una queja."
    ],
    [TenseId.IMPERFECT]: [
      "Yo ponía la radio todas las mañanas.",
      "Tú ponías excusas siempre.",
      "Él ponía cara de sorpresa.",
      "Nosotros poníamos el árbol de Navidad juntos.",
      "Vosotros poníais la música muy alta.",
      "Ellos ponían las reglas del juego."
    ],
    [TenseId.FUTURE]: [
      "Yo pondré la mesa para la cena.",
      "Tú pondrás el despertador a las siete.",
      "Él pondrá todo su esfuerzo.",
      "Nosotros pondremos fin a esta discusión.",
      "Vosotros pondréis las flores en el jarrón.",
      "Ellos pondrán una denuncia."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo me pondría ese vestido.",
      "Tú pondrías el grito en el cielo.",
      "Él pondría más interés si le pagaran más.",
      "Nosotros pondríamos una queja.",
      "Vosotros pondríais la calefacción.",
      "Ellos pondrían solución al problema."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo ponga bien la dirección.",
      "Quiero que tú pongas atención.",
      "Es necesario que él ponga de su parte.",
      "Ojalá que nosotros pongamos música.",
      "Dudo que vosotros pongáis pegas.",
      "Es posible que ellos pongan una película."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Pon la mesa!",
      "Ponga su firma aquí.",
      "Pongamos las cosas en su sitio.",
      "Poned atención a la clase.",
      "Pongan sus teléfonos en silencio."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo pusiera atención, aprendería.",
      "Quería que tú pusieras la mesa.",
      "No creía que él pusiera excusas.",
      "Si nosotros pusiéramos música, bailaríamos.",
      "Dudaba que vosotros pusierais interés.",
      "Era necesario que ellos pusieran orden."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he puesto la mesa.",
      "Tú has puesto la radio.",
      "Ella se ha puesto un vestido rojo.",
      "Nosotros hemos puesto todo nuestro empeño.",
      "Vosotros os habéis puesto de acuerdo.",
      "Ellos han puesto una denuncia."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había puesto la mesa.",
      "Tú habías puesto música.",
      "Ella había puesto orden.",
      "Nosotros habíamos puesto.",
      "Vosotros habíais puesto.",
      "Ellos habían puesto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré puesto fin a esto.",
      "Tú habrás puesto tu parte.",
      "Ella habrá puesto la radio.",
      "Nosotros habremos puesto.",
      "Vosotros habréis puesto.",
      "Ellos habrán puesto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría puesto más.",
      "Tú habrías puesto menos.",
      "Ella habría puesto flores.",
      "Nosotros habríamos puesto.",
      "Vosotros habríais puesto.",
      "Ellos habrían puesto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya puesto.",
      "Dudo que tú hayas puesto.",
      "Es posible que ella haya puesto.",
      "Ojalá nosotros hayamos puesto.",
      "No creo que vosotros hayáis puesto.",
      "Es bueno que ellos hayan puesto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera puesto atención, sabría.",
      "Si tú hubieras puesto la mesa, comeríamos.",
      "Si ella hubiera puesto música, bailaríamos.",
      "Si nosotros hubiéramos puesto interés, ganaríamos.",
      "Si vosotros hubierais puesto cuidado, no romperíais.",
      "Si ellos hubieran puesto dinero, comprarían."
    ]
  };

export default data;
