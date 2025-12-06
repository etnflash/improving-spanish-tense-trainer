import { TenseId } from '../../../../types';

export const verb = 'ir';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo voy al cine esta noche.",
      "Tú vas a la escuela en autobús.",
      "Él va al gimnasio todos los días.",
      "Nosotros vamos de vacaciones a la playa.",
      "Vosotros vais a la fiesta de cumpleaños.",
      "Ellos van al supermercado los domingos."
    ],
    [TenseId.PRETERITE]: [
      "Yo fui al médico ayer.",
      "Tú fuiste a la playa el fin de semana.",
      "Ella fue a comprar pan.",
      "Nosotros fuimos al concierto juntos.",
      "Vosotros fuisteis al parque de atracciones.",
      "Ellos fueron a visitar a sus abuelos."
    ],
    [TenseId.IMPERFECT]: [
      "Yo iba a la escuela caminando.",
      "Tú ibas al gimnasio todas las tardes.",
      "Él iba a visitar a su novia cada viernes.",
      "Nosotros íbamos a la playa todos los veranos.",
      "Vosotros ibais al cine los sábados.",
      "Ellos iban a misa los domingos."
    ],
    [TenseId.FUTURE]: [
      "Yo iré a verte mañana.",
      "Tú irás a la universidad el próximo año.",
      "Él irá al médico si no mejora.",
      "Nosotros iremos de compras el sábado.",
      "Vosotros iréis primero.",
      "Ellos irán en avión a Londres."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo iría si tuviera tiempo.",
      "Tú irías al fin del mundo por ella.",
      "Él iría encantado a la fiesta.",
      "Nosotros iríamos, pero no tenemos coche.",
      "Vosotros iríais si os invitaran.",
      "Ellos irían más a menudo si vivieran cerca."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es posible que yo vaya más tarde.",
      "No quiero que tú vayas solo.",
      "Es necesario que él vaya al hospital.",
      "Ojalá que nosotros vayamos juntos.",
      "Espero que vosotros vayáis con cuidado.",
      "Dudo que ellos vayan a venir."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ve a tu cuarto!",
      "Vaya con Dios.",
      "Vayamos al grano.",
      "Id con cuidado.",
      "Vayan por la sombra."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo fuera a la fiesta, te avisaría.",
      "Quería que tú fueras al médico.",
      "No creía que él fuera capaz de ir.",
      "Si nosotros fuéramos juntos, sería mejor.",
      "Dudaba que vosotros fuerais a pie.",
      "Era necesario que ellos fueran temprano."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he ido al cine esta semana.",
      "Tú has ido a esa tienda antes.",
      "Ella ha ido a visitar a su abuela.",
      "Nosotros hemos ido de excursión.",
      "Vosotros habéis ido demasiado lejos.",
      "Ellos han ido a la playa."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había ido allí antes.",
      "Tú habías ido sin avisar.",
      "Ella había ido al médico.",
      "Nosotros habíamos ido juntos.",
      "Vosotros habíais ido en coche.",
      "Ellos habían ido a pie."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré ido y vuelto.",
      "Tú habrás ido a la fiesta.",
      "Ella habrá ido a trabajar.",
      "Nosotros habremos ido de viaje.",
      "Vosotros habréis ido al cine.",
      "Ellos habrán ido a dormir."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría ido si pudiera.",
      "Tú habrías ido con ella.",
      "Ella habría ido sola.",
      "Nosotros habríamos ido antes.",
      "Vosotros habríais ido después.",
      "Ellos habrían ido en avión."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya ido bien.",
      "Dudo que tú hayas ido.",
      "Es posible que ella haya ido.",
      "Ojalá nosotros hayamos ido.",
      "No creo que vosotros hayáis ido.",
      "Es bueno que ellos hayan ido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera ido, te habría visto.",
      "Si tú hubieras ido, te divertirías.",
      "Si ella hubiera ido, estaría feliz.",
      "Si nosotros hubiéramos ido, ganaríamos.",
      "Si vosotros hubierais ido, sabríais.",
      "Si ellos hubieran ido, comerían."
    ]
  };

export default data;
