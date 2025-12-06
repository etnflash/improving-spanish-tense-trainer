import { TenseId } from '../../../../types';

export const verb = 'beber';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo bebo café sin azúcar.",
      "Tú bebes mucha agua durante el ejercicio.",
      "Usted bebe vino tinto con la cena.",
      "Nosotros bebemos jugo de naranja natural.",
      "Vosotros bebéis té por la tarde.",
      "Ellas beben leche antes de dormir."
    ],
    [TenseId.PRETERITE]: [
      "Yo bebí un vaso de agua fría.",
      "Tú bebiste demasiado anoche.",
      "Él bebió todo el jugo.",
      "Nosotros bebimos champán para celebrar.",
      "Vosotros bebisteis cerveza en el bar.",
      "Ellos bebieron café después de comer."
    ],
    [TenseId.IMPERFECT]: [
      "Yo bebía leche con chocolate de niño.",
      "Tú bebías agua del grifo antes.",
      "Él bebía café mientras leía el periódico.",
      "Nosotros bebíamos limonada en verano.",
      "Vosotros bebíais vino en las fiestas.",
      "Ellos bebían té caliente en invierno."
    ],
    [TenseId.FUTURE]: [
      "Yo beberé agua después de correr.",
      "Tú beberás un refresco en el cine.",
      "Él beberá una copa de vino en la cena.",
      "Nosotros beberemos a vuestra salud.",
      "Vosotros beberéis del manantial.",
      "Ellos beberán cerveza en el bar."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo bebería agua si tuviera sed.",
      "Tú beberías menos café si pudieras.",
      "Él bebería cualquier cosa que le dieras.",
      "Nosotros beberíamos un té caliente ahora.",
      "Vosotros beberíais más si fuera gratis.",
      "Ellos beberían vino si les gustara."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es importante que yo beba mucha agua.",
      "No quiero que tú bebas alcohol.",
      "Es mejor que él no beba eso.",
      "Sugieren que nosotros bebamos dos litros al día.",
      "Espero que vosotros bebáis con moderación.",
      "Dudo que ellos beban todo el jugo."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Bebe despacio!",
      "Beba este medicamento.",
      "Bebamos por el éxito.",
      "Bebed con responsabilidad.",
      "Beban agua antes de salir."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo bebiera alcohol, no conduciría.",
      "Quería que tú bebieras este jugo.",
      "No creía que él bebiera tanto café.",
      "Si nosotros bebiéramos menos refrescos, sería saludable.",
      "Dudaba que vosotros bebierais té.",
      "Era imposible que ellos bebieran del río."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he bebido un vaso de agua.",
      "Tú has bebido demasiado café.",
      "Ella ha bebido su medicina.",
      "Nosotros hemos bebido vino tinto.",
      "Vosotros habéis bebido cerveza artesanal.",
      "Ellos han bebido todo el jugo."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había bebido agua.",
      "Tú habías bebido vino.",
      "Ella había bebido té.",
      "Nosotros habíamos bebido.",
      "Vosotros habíais bebido.",
      "Ellos habían bebido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré bebido suficiente.",
      "Tú habrás bebido todo.",
      "Ella habrá bebido poco.",
      "Nosotros habremos bebido.",
      "Vosotros habréis bebido.",
      "Ellos habrán bebido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría bebido más.",
      "Tú habrías bebido menos.",
      "Ella habría bebido agua.",
      "Nosotros habríamos bebido.",
      "Vosotros habríais bebido.",
      "Ellos habrían bebido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya bebido.",
      "Dudo que tú hayas bebido.",
      "Es posible que ella haya bebido.",
      "Ojalá nosotros hayamos bebido.",
      "No creo que vosotros hayáis bebido.",
      "Es bueno que ellos hayan bebido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera bebido, no tendría sed.",
      "Si tú hubieras bebido, estarías bien.",
      "Si ella hubiera bebido, no tosería.",
      "Si nosotros hubiéramos bebido, brindaríamos.",
      "Si vosotros hubierais bebido, cantaríais.",
      "Si ellos hubieran bebido, dormirían."
    ]
  };

export default data;
