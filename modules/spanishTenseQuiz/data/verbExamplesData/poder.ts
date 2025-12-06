import { TenseId } from '../../../../types';

export const verb = 'poder';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo puedo ayudarte con eso.",
      "Tú puedes lograr lo que te propongas.",
      "Él puede tocar la guitarra muy bien.",
      "Nosotros podemos ir al cine mañana.",
      "Vosotros podéis entrar ahora.",
      "Ellos pueden correr muy rápido."
    ],
    [TenseId.PRETERITE]: [
      "Yo pude terminar el trabajo a tiempo.",
      "Tú pudiste ver el eclipse.",
      "Él no pudo venir a la fiesta.",
      "Nosotros pudimos resolver el problema.",
      "Vosotros pudisteis entrar gratis.",
      "Ellos pudieron escapar del peligro."
    ],
    [TenseId.IMPERFECT]: [
      "Yo podía correr más rápido antes.",
      "Tú podías quedarte despierto hasta tarde.",
      "Él podía leer a los cuatro años.",
      "Nosotros podíamos ver el mar desde la ventana.",
      "Vosotros podíais salir a jugar.",
      "Ellos podían entrar sin pagar."
    ],
    [TenseId.FUTURE]: [
      "Yo podré ir mañana.",
      "Tú podrás hacerlo si te esfuerzas.",
      "Él podrá caminar pronto.",
      "Nosotros podremos comprar la casa.",
      "Vosotros podréis ver el resultado.",
      "Ellos podrán viajar libremente."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo podría ayudarte si quieres.",
      "Tú podrías ser un gran líder.",
      "Él podría llegar tarde.",
      "Nosotros podríamos ir al cine.",
      "Vosotros podríais intentarlo de nuevo.",
      "Ellos podrían ganar el partido."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo pueda ir.",
      "Ojalá que tú puedas venir.",
      "Es posible que él pueda arreglarlo.",
      "Dudo que nosotros podamos terminar.",
      "No creo que vosotros podáis entrar.",
      "Espero que ellos puedan perdonarme."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Puede ser!",
      "Pueda usted pasar.",
      "Podamos nosotros vencer.",
      "Poded vosotros intentarlo.",
      "Puedan ellos lograrlo."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo pudiera volar, iría a la luna.",
      "Quería que tú pudieras venir.",
      "No creía que él pudiera hacerlo.",
      "Si nosotros pudiéramos ayudar, lo haríamos.",
      "Dudaba que vosotros pudierais terminar.",
      "Era imposible que ellos pudieran entrar."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he podido descansar un poco.",
      "Tú has podido resolver el problema.",
      "Ella ha podido comprar la casa.",
      "Nosotros hemos podido hablar con él.",
      "Vosotros habéis podido ver la película.",
      "Ellos han podido llegar a tiempo."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había podido ir.",
      "Tú habías podido ver.",
      "Ella había podido salir.",
      "Nosotros habíamos podido.",
      "Vosotros habíais podido.",
      "Ellos habían podido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré podido terminar.",
      "Tú habrás podido entrar.",
      "Ella habrá podido ganar.",
      "Nosotros habremos podido.",
      "Vosotros habréis podido.",
      "Ellos habrán podido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría podido ayudar.",
      "Tú habrías podido venir.",
      "Ella habría podido hacerlo.",
      "Nosotros habríamos podido.",
      "Vosotros habríais podido.",
      "Ellos habrían podido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya podido.",
      "Dudo que tú hayas podido.",
      "Es posible que ella haya podido.",
      "Ojalá nosotros hayamos podido.",
      "No creo que vosotros hayáis podido.",
      "Es bueno que ellos hayan podido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera podido, iría.",
      "Si tú hubieras podido, vendrías.",
      "Si ella hubiera podido, lo haría.",
      "Si nosotros hubiéramos podido, ayudaríamos.",
      "Si vosotros hubierais podido, ganaríais.",
      "Si ellos hubieran podido, entrarían."
    ]
  };

export default data;
