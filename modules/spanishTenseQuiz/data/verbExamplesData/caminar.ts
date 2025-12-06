import { TenseId } from '../../../../types';

export const verb = 'caminar';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo camino por el parque todas las mañanas.",
      "Tú caminas muy despacio.",
      "Él camina hacia la estación de tren.",
      "Nosotros caminamos juntos a la escuela.",
      "Vosotros camináis por la playa en verano.",
      "Ellos caminan cinco kilómetros al día."
    ],
    [TenseId.PRETERITE]: [
      "Yo caminé hasta tu casa.",
      "Tú caminaste todo el día por la ciudad.",
      "Él caminó bajo la lluvia.",
      "Nosotros caminamos por el sendero ayer.",
      "Vosotros caminasteis mucho en la excursión.",
      "Ellos caminaron hacia el horizonte."
    ],
    [TenseId.IMPERFECT]: [
      "Yo caminaba al trabajo todos los días.",
      "Tú caminabas mientras leías un libro.",
      "Él caminaba cojeando un poco.",
      "Nosotros caminábamos por la orilla del mar.",
      "Vosotros caminabais rápido para no llegar tarde.",
      "Ellos caminaban juntos de la mano."
    ],
    [TenseId.FUTURE]: [
      "Yo caminaré hasta la cima de la montaña.",
      "Tú caminarás por el sendero marcado.",
      "Él caminará de nuevo muy pronto.",
      "Nosotros caminaremos por la ciudad mañana.",
      "Vosotros caminaréis mucho en el viaje.",
      "Ellos caminarán para recaudar fondos."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo caminaría más si no me dolieran los pies.",
      "Tú caminarías hasta allí si fuera necesario.",
      "Él caminaría contigo si se lo pidieras.",
      "Nosotros caminaríamos si no lloviera.",
      "Vosotros caminaríais en lugar de ir en coche.",
      "Ellos caminarían todo el día sin cansarse."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es bueno que yo camine todos los días.",
      "Te sugiero que tú camines más.",
      "Es importante que él camine derecho.",
      "El médico recomienda que nosotros caminemos.",
      "Espero que vosotros caminéis con cuidado.",
      "Es mejor que ellos caminen por la acera."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Camina más rápido!",
      "Camine por la derecha.",
      "Caminemos juntos.",
      "Caminad sin hacer ruido.",
      "Caminen con precaución."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo caminara más rápido, llegaría antes.",
      "Me gustaría que tú caminaras conmigo.",
      "Dudaba que él caminara tanto.",
      "Si nosotros camináramos a diario, estaríamos en forma.",
      "Ojalá vosotros caminarais por el sendero.",
      "Era necesario que ellos caminaran despacio."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he caminado cinco kilómetros.",
      "Tú has caminado por el parque.",
      "Ella ha caminado bajo la lluvia.",
      "Nosotros hemos caminado juntos.",
      "Vosotros habéis caminado mucho hoy.",
      "Ellos han caminado hasta la cima."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había caminado mucho.",
      "Tú habías caminado solo.",
      "Ella había caminado rápido.",
      "Nosotros habíamos caminado lejos.",
      "Vosotros habíais caminado juntos.",
      "Ellos habían caminado despacio."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré caminado 10km.",
      "Tú habrás caminado todo el día.",
      "Ella habrá caminado a casa.",
      "Nosotros habremos caminado mucho.",
      "Vosotros habréis caminado ya.",
      "Ellos habrán caminado por ahí."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría caminado más.",
      "Tú habrías caminado conmigo.",
      "Ella habría caminado sola.",
      "Nosotros habríamos caminado.",
      "Vosotros habríais caminado.",
      "Ellos habrían caminado."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya caminado.",
      "Dudo que tú hayas caminado.",
      "Es posible que ella haya caminado.",
      "Ojalá nosotros hayamos caminado.",
      "No creo que vosotros hayáis caminado.",
      "Es bueno que ellos hayan caminado."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera caminado, estaría cansado.",
      "Si tú hubieras caminado, llegarías.",
      "Si ella hubiera caminado, vería.",
      "Si nosotros hubiéramos caminado, sabríamos.",
      "Si vosotros hubierais caminado, estaríais.",
      "Si ellos hubieran caminado, llegarían."
    ]
  };

export default data;
