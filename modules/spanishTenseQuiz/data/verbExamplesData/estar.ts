import { TenseId } from '../../../../types';

export const verb = 'estar';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo estoy cansado después del trabajo.",
      "Tú estás feliz por la noticia.",
      "Ella está en la biblioteca estudiando.",
      "Nosotros estamos listos para salir.",
      "Vosotros estáis ocupados ahora mismo.",
      "Ustedes están invitados a la fiesta."
    ],
    [TenseId.PRETERITE]: [
      "Yo estuve enfermo la semana pasada.",
      "Tú estuviste en la fiesta anoche, ¿verdad?",
      "Ella estuvo esperando por dos horas.",
      "Nosotros estuvimos en París el verano pasado.",
      "Vosotros estuvisteis muy callados en la cena.",
      "Ellos estuvieron de acuerdo con el plan."
    ],
    [TenseId.IMPERFECT]: [
      "Yo estaba durmiendo cuando llamaste.",
      "Tú estabas siempre contento.",
      "Ella estaba en casa cuando llegué.",
      "Nosotros estábamos jugando en el parque.",
      "Vosotros estabais preocupados por el examen.",
      "Ellos estaban trabajando en el jardín."
    ],
    [TenseId.FUTURE]: [
      "Yo estaré allí a las ocho.",
      "Tú estarás cansado después del viaje.",
      "Ella estará contenta con el regalo.",
      "Nosotros estaremos esperando.",
      "Vosotros estaréis listos pronto.",
      "Ellos estarán de acuerdo."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo estaría encantado de ir.",
      "Tú estarías mejor en casa.",
      "Ella estaría preocupada.",
      "Nosotros estaríamos dispuestos a ayudar.",
      "Vosotros estaríais más cómodos aquí.",
      "Ellos estarían interesados."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo esté a la altura.",
      "Quiero que tú estés bien.",
      "Es posible que ella esté ocupada.",
      "Dudo que nosotros estemos listos.",
      "No creo que vosotros estéis enfermos.",
      "Es necesario que ellos estén presentes."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Estate quieto!",
      "Esté atento a las instrucciones.",
      "Estemos unidos.",
      "Estad preparados.",
      "Estén tranquilos, todo saldrá bien."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo estuviera allí, te ayudaría.",
      "Quisiera que tú estuvieras aquí.",
      "No creía que ella estuviera enferma.",
      "Si nosotros estuviéramos listos, saldríamos.",
      "Dudaba que vosotros estuvierais de acuerdo.",
      "Era necesario que ellos estuvieran presentes."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he estado ocupado todo el día.",
      "Tú has estado en París, ¿verdad?",
      "Ella ha estado esperando una hora.",
      "Nosotros hemos estado trabajando mucho.",
      "Vosotros habéis estado muy callados.",
      "Ellos han estado de vacaciones."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había estado allí una vez.",
      "Tú habías estado enfermo.",
      "Ella había estado esperando.",
      "Nosotros habíamos estado juntos.",
      "Vosotros habíais estado callados.",
      "Ellos habían estado trabajando."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré estado listo.",
      "Tú habrás estado ocupado.",
      "Ella habrá estado viajando.",
      "Nosotros habremos estado esperando.",
      "Vosotros habréis estado atentos.",
      "Ellos habrán estado presentes."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría estado feliz.",
      "Tú habrías estado de acuerdo.",
      "Ella habría estado triste.",
      "Nosotros habríamos estado allí.",
      "Vosotros habríais estado mejor.",
      "Ellos habrían estado seguros."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya estado bien.",
      "Dudo que tú hayas estado atento.",
      "Es posible que ella haya estado.",
      "Ojalá nosotros hayamos estado a la altura.",
      "No creo que vosotros hayáis estado.",
      "Es bueno que ellos hayan estado tranquilos."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera estado allí, te ayudaría.",
      "Si tú hubieras estado listo, saldríamos.",
      "Si ella hubiera estado enferma, lo sabría.",
      "Si nosotros hubiéramos estado atentos, ganaríamos.",
      "Si vosotros hubierais estado callados, escucharíais.",
      "Si ellos hubieran estado presentes, votarían."
    ]
  };

export default data;
