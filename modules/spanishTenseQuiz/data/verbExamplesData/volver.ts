import { TenseId } from '../../../../types';

export const verb = 'volver';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo vuelvo a casa después de la escuela.",
      "Tú vuelves temprano hoy.",
      "Ella vuelve de su viaje mañana.",
      "Nosotros volvemos a intentarlo.",
      "Vosotros volvéis al mismo restaurante.",
      "Ellos vuelven cansados del partido."
    ],
    [TenseId.PRETERITE]: [
      "Yo volví a llamar más tarde.",
      "Tú volviste a cometer el mismo error.",
      "Él volvió a su país natal.",
      "Nosotros volvimos a vernos después de años.",
      "Vosotros volvisteis antes de lo esperado.",
      "Ellos volvieron a empezar."
    ],
    [TenseId.IMPERFECT]: [
      "Yo volvía a casa cuando te vi.",
      "Tú volvías siempre por el mismo camino.",
      "Él volvía tarde del trabajo.",
      "Nosotros volvíamos a ser amigos.",
      "Vosotros volvíais cada Navidad.",
      "Ellos volvían a contar la misma historia."
    ],
    [TenseId.FUTURE]: [
      "Yo volveré pronto.",
      "Tú volverás a verla.",
      "Él volverá a intentarlo.",
      "Nosotros volveremos el año que viene.",
      "Vosotros volveréis a casa cansados.",
      "Ellos volverán a ganar."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo volvería si me perdonaras.",
      "Tú volverías a hacerlo si pudieras.",
      "Él volvería con ella sin dudarlo.",
      "Nosotros volveríamos a ese hotel.",
      "Vosotros volveríais a empezar de cero.",
      "Ellos volverían a su país si hubiera trabajo."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo vuelva a verte.",
      "Quiero que tú vuelvas pronto.",
      "Es posible que él vuelva mañana.",
      "Ojalá que nosotros volvamos a ganar.",
      "Dudo que vosotros volváis tarde.",
      "Es necesario que ellos vuelvan a clase."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Vuelve a casa!",
      "Vuelva usted mañana.",
      "Volvamos a empezar.",
      "Volved pronto.",
      "Vuelvan a sus asientos."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo volviera a nacer, sería músico.",
      "Quería que tú volvieras pronto.",
      "No creía que él volviera a hacerlo.",
      "Si nosotros volviéramos, todo sería igual.",
      "Dudaba que vosotros volvierais tan rápido.",
      "Era necesario que ellos volvieran a intentar."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he vuelto a casa.",
      "Tú has vuelto a fallar.",
      "Ella ha vuelto con su ex.",
      "Nosotros hemos vuelto a vernos.",
      "Vosotros habéis vuelto a preguntar.",
      "Ellos han vuelto de vacaciones."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había vuelto ayer.",
      "Tú habías vuelto pronto.",
      "Ella había vuelto a casa.",
      "Nosotros habíamos vuelto.",
      "Vosotros habíais vuelto.",
      "Ellos habían vuelto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré vuelto para entonces.",
      "Tú habrás vuelto a verla.",
      "Ella habrá vuelto a empezar.",
      "Nosotros habremos vuelto.",
      "Vosotros habréis vuelto.",
      "Ellos habrán vuelto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría vuelto si pudiera.",
      "Tú habrías vuelto con ella.",
      "Ella habría vuelto sola.",
      "Nosotros habríamos vuelto.",
      "Vosotros habríais vuelto.",
      "Ellos habrían vuelto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya vuelto.",
      "Dudo que tú hayas vuelto.",
      "Es posible que ella haya vuelto.",
      "Ojalá nosotros hayamos vuelto.",
      "No creo que vosotros hayáis vuelto.",
      "Es bueno que ellos hayan vuelto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera vuelto, te vería.",
      "Si tú hubieras vuelto, sabrías.",
      "Si ella hubiera vuelto, estaría.",
      "Si nosotros hubiéramos vuelto, comeríamos.",
      "Si vosotros hubierais vuelto, dormiríais.",
      "Si ellos hubieran vuelto, jugarían."
    ]
  };

export default data;
