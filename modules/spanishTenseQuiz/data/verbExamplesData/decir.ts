import { TenseId } from '../../../../types';

export const verb = 'decir';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo digo siempre la verdad.",
      "Tú dices cosas muy graciosas.",
      "Ella dice que no quiere ir.",
      "Nosotros decimos 'hola' cuando llegamos.",
      "Vosotros decís mentiras a veces.",
      "Ellos dicen que la película es buena."
    ],
    [TenseId.PRETERITE]: [
      "Yo dije que no.",
      "Tú dijiste la verdad.",
      "Él dijo algo importante.",
      "Nosotros dijimos adiós en el aeropuerto.",
      "Vosotros dijisteis que vendríais.",
      "Ellos dijeron que estaban cansados."
    ],
    [TenseId.IMPERFECT]: [
      "Yo decía eso todo el tiempo.",
      "Tú decías que no te gustaba.",
      "Él decía mentiras a menudo.",
      "Nosotros decíamos que era imposible.",
      "Vosotros decíais cosas sin sentido.",
      "Ellos decían que iban a llegar pronto."
    ],
    [TenseId.FUTURE]: [
      "Yo diré la verdad ante el juez.",
      "Tú dirás qué prefieres.",
      "Él dirá que sí, estoy seguro.",
      "Nosotros diremos adiós mañana.",
      "Vosotros diréis vuestra opinión.",
      "Ellos dirán lo que pasó realmente."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo diría que es una mala idea.",
      "Tú dirías lo mismo en mi situación.",
      "Él diría que no tiene tiempo.",
      "Nosotros diríamos que sí a la oferta.",
      "Vosotros diríais que es muy caro.",
      "Ellos dirían cualquier cosa por ganar."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "No dejes que yo diga tonterías.",
      "Quiero que tú digas la verdad.",
      "Es importante que él diga su nombre.",
      "Espero que nosotros digamos lo correcto.",
      "Prefiero que vosotros digáis que no.",
      "Dudo que ellos digan algo."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Di la verdad!",
      "Diga usted qué necesita.",
      "Digamos que es posible.",
      "Decid lo que pensáis.",
      "Digan presente cuando los llamen."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo dijera la verdad, nadie me creería.",
      "Quería que tú dijeras algo.",
      "No creía que él dijera eso.",
      "Si nosotros dijéramos que no, se enfadarían.",
      "Dudaba que vosotros dijerais mentiras.",
      "Era necesario que ellos dijeran su nombre."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he dicho que sí.",
      "Tú has dicho una tontería.",
      "Ella ha dicho que vendrá.",
      "Nosotros hemos dicho la verdad.",
      "Vosotros habéis dicho adiós.",
      "Ellos han dicho que no saben nada."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había dicho que sí.",
      "Tú habías dicho la verdad.",
      "Ella había dicho mentiras.",
      "Nosotros habíamos dicho hola.",
      "Vosotros habíais dicho adiós.",
      "Ellos habían dicho todo."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré dicho mi opinión.",
      "Tú habrás dicho algo.",
      "Ella habrá dicho que no.",
      "Nosotros habremos dicho.",
      "Vosotros habréis dicho.",
      "Ellos habrán dicho."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría dicho que no.",
      "Tú habrías dicho eso.",
      "Ella habría dicho la verdad.",
      "Nosotros habríamos dicho.",
      "Vosotros habríais dicho.",
      "Ellos habrían dicho."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya dicho bien.",
      "Dudo que tú hayas dicho eso.",
      "Es posible que ella haya dicho.",
      "Ojalá nosotros hayamos dicho.",
      "No creo que vosotros hayáis dicho.",
      "Es bueno que ellos hayan dicho."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera dicho la verdad, me creerían.",
      "Si tú hubieras dicho algo, sabríamos.",
      "Si ella hubiera dicho que sí, iríamos.",
      "Si nosotros hubiéramos dicho no, se enfadarían.",
      "Si vosotros hubierais dicho hola, saludarían.",
      "Si ellos hubieran dicho adiós, se irían."
    ]
  };

export default data;
