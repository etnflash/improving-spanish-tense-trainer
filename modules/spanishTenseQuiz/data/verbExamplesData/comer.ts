import { TenseId } from '../../../../types';

export const verb = 'comer';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo como una manzana cada mañana.",
      "Tú comes demasiados dulces.",
      "Ella come en el restaurante de la esquina.",
      "Nosotros comemos pizza los viernes.",
      "Vosotros coméis muy tarde en España.",
      "Ustedes comen verduras para estar saludables."
    ],
    [TenseId.PRETERITE]: [
      "Yo comí una ensalada para el almuerzo.",
      "Tú comiste todo el pastel.",
      "Él comió en un restaurante italiano anoche.",
      "Nosotros comimos juntos el domingo pasado.",
      "Vosotros comisteis muy rápido.",
      "Ellos comieron mariscos en la playa."
    ],
    [TenseId.IMPERFECT]: [
      "Yo comía muchos dulces cuando era pequeño.",
      "Tú comías en casa de tus abuelos los veranos.",
      "Ella comía sola en la escuela.",
      "Nosotros comíamos paella los domingos.",
      "Vosotros comíais a las dos de la tarde.",
      "Ellos comían mientras veían la televisión."
    ],
    [TenseId.FUTURE]: [
      "Yo comeré en casa de mi madre el domingo.",
      "Tú comerás lo que haya en la nevera.",
      "Ella comerá con sus amigas mañana.",
      "Nosotros comeremos fuera para celebrar.",
      "Vosotros comeréis el postre después.",
      "Ellos comerán antes de salir de viaje."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo comería más, pero estoy lleno.",
      "Tú comerías pizza todos los días si pudieras.",
      "Ella comería en ese restaurante si fuera más barato.",
      "Nosotros comeríamos cualquier cosa ahora mismo.",
      "Vosotros comeríais mejor si cocinarais en casa.",
      "Ellos comerían con nosotros si los invitáramos."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es bueno que yo coma frutas y verduras.",
      "Quiero que tú comas con nosotros.",
      "Dudo que ella coma eso.",
      "Es necesario que nosotros comamos antes.",
      "Prefiero que vosotros comáis en el jardín.",
      "Espero que ellos coman pronto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Come más despacio, por favor!",
      "Coma usted con la boca cerrada.",
      "Comamos en el jardín.",
      "Comed todo lo que hay en el plato.",
      "Coman antes de que se enfríe."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo comiera inglés, viajaría más.",
      "Me gustaría que tú comieras con él.",
      "Dudaba que él comiera en serio.",
      "Si nosotros comiéramos más, nos entenderíamos.",
      "Ojalá vosotros comierais con la verdad.",
      "Era necesario que ellos comieran claro."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he comido con el director.",
      "Tú has comido demasiado hoy.",
      "Él ha comido muy bien de ti.",
      "Nosotros hemos comido del tema.",
      "Vosotros habéis comido por horas.",
      "Ellos han comido con sus abogados."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había comido antes de llegar.",
      "Tú habías comido ya cuando te llamé.",
      "Él había comido demasiado.",
      "Nosotros habíamos comido en ese lugar antes.",
      "Vosotros habíais comido muy bien.",
      "Ellos habían comido todo el pastel."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré comido para cuando llegues.",
      "Tú habrás comido algo ligero.",
      "Él habrá comido en el trabajo.",
      "Nosotros habremos comido antes de salir.",
      "Vosotros habréis comido ya.",
      "Ellos habrán comido en el restaurante."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría comido más, pero no había.",
      "Tú habrías comido eso si te gustara.",
      "Él habría comido con nosotros.",
      "Nosotros habríamos comido pizza.",
      "Vosotros habríais comido mejor en casa.",
      "Ellos habrían comido si tuvieran hambre."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya comido suficiente.",
      "Dudo que tú hayas comido todo.",
      "Es posible que él haya comido mal.",
      "Ojalá nosotros hayamos comido sano.",
      "No creo que vosotros hayáis comido.",
      "Es bueno que ellos hayan comido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera comido, no tendría hambre.",
      "Si tú hubieras comido, estarías mejor.",
      "Si él hubiera comido, no se habría desmayado.",
      "Si nosotros hubiéramos comido, estaríamos llenos.",
      "Si vosotros hubierais comido, podríamos salir.",
      "Si ellos hubieran comido, estarían contentos."
    ]
  };

export default data;
