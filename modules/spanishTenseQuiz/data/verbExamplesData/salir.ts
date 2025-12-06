import { TenseId } from '../../../../types';

export const verb = 'salir';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo salgo de casa a las ocho.",
      "Tú sales con tus amigos los viernes.",
      "Él sale del trabajo muy tarde.",
      "Nosotros salimos a cenar esta noche.",
      "Vosotros salís de vacaciones pronto.",
      "Ellos salen a correr por la mañana."
    ],
    [TenseId.PRETERITE]: [
      "Yo salí temprano de la oficina.",
      "Tú saliste por la puerta trasera.",
      "Él salió en las noticias.",
      "Nosotros salimos a bailar anoche.",
      "Vosotros salisteis ilesos del accidente.",
      "Ellos salieron de viaje ayer."
    ],
    [TenseId.IMPERFECT]: [
      "Yo salía con ella en la universidad.",
      "Tú salías a jugar a la calle.",
      "Él salía de casa cuando lo vi.",
      "Nosotros salíamos todos los fines de semana.",
      "Vosotros salíais del colegio a las tres.",
      "Ellos salían a pasear al perro."
    ],
    [TenseId.FUTURE]: [
      "Yo saldré de viaje mañana.",
      "Tú saldrás en la foto.",
      "Él saldrá del hospital pronto.",
      "Nosotros saldremos ganando.",
      "Vosotros saldréis a cenar fuera.",
      "Ellos saldrán a recibirnos."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo saldría si no estuviera lloviendo.",
      "Tú saldrías con nosotros si quisieras.",
      "Él saldría corriendo si viera un ratón.",
      "Nosotros saldríamos de dudas preguntando.",
      "Vosotros saldríais beneficiados.",
      "Ellos saldrían a recibirnos."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo salga bien en la foto.",
      "No quiero que tú salgas tarde.",
      "Es posible que él salga con amigos.",
      "Mamá quiere que nosotros salgamos abrigados.",
      "Dudo que vosotros salgáis hoy.",
      "Es necesario que ellos salgan ahora."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Sal de ahí!",
      "Salga por la puerta de emergencia.",
      "Salgamos a tomar aire.",
      "Salid al recreo.",
      "Salgan ordenadamente."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo saliera ahora, llegaría a tiempo.",
      "Me gustaría que tú salieras conmigo.",
      "No creía que él saliera de noche.",
      "Si nosotros saliéramos, nos divertiríamos.",
      "Dudaba que vosotros salierais con lluvia.",
      "Era imposible que ellos salieran sin permiso."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he salido ya.",
      "Tú has salido tarde.",
      "Ella ha salido con sus amigas.",
      "Nosotros hemos salido ganando.",
      "Vosotros habéis salido ilesos.",
      "Ellos han salido a cenar."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había salido ya.",
      "Tú habías salido tarde.",
      "Ella había salido con él.",
      "Nosotros habíamos salido.",
      "Vosotros habíais salido.",
      "Ellos habían salido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré salido del trabajo.",
      "Tú habrás salido de viaje.",
      "Ella habrá salido en la tele.",
      "Nosotros habremos salido.",
      "Vosotros habréis salido.",
      "Ellos habrán salido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría salido antes.",
      "Tú habrías salido después.",
      "Ella habría salido corriendo.",
      "Nosotros habríamos salido.",
      "Vosotros habríais salido.",
      "Ellos habrían salido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya salido.",
      "Dudo que tú hayas salido.",
      "Es posible que ella haya salido.",
      "Ojalá nosotros hayamos salido.",
      "No creo que vosotros hayáis salido.",
      "Es bueno que ellos hayan salido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera salido, llegaría.",
      "Si tú hubieras salido, verías.",
      "Si ella hubiera salido, sabría.",
      "Si nosotros hubiéramos salido, estaríamos.",
      "Si vosotros hubierais salido, tendríais.",
      "Si ellos hubieran salido, vendrían."
    ]
  };

export default data;
