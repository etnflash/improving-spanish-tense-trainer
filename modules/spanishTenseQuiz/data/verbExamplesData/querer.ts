import { TenseId } from '../../../../types';

export const verb = 'querer';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo quiero un helado de chocolate.",
      "Tú quieres viajar a España.",
      "Él quiere comprar un coche nuevo.",
      "Nosotros queremos aprender español.",
      "Vosotros queréis descansar un poco.",
      "Ellas quieren ir a la playa."
    ],
    [TenseId.PRETERITE]: [
      "Yo quise ayudarte, pero no pude.",
      "Tú quisiste ir, pero llovía.",
      "Él quiso decir la verdad.",
      "Nosotros quisimos comer pizza.",
      "Vosotros quisisteis salir temprano.",
      "Ellos quisieron ayudar."
    ],
    [TenseId.IMPERFECT]: [
      "Yo quería ser astronauta.",
      "Tú querías un perro de mascota.",
      "Él quería ir al cine.",
      "Nosotros queríamos jugar al fútbol.",
      "Vosotros queríais más tiempo libre.",
      "Ellos querían visitar París."
    ],
    [TenseId.FUTURE]: [
      "Yo querré volver aquí algún día.",
      "Tú querrás saber la verdad.",
      "Él querrá comprarlo cuando lo vea.",
      "Nosotros querremos ir también.",
      "Vosotros querréis descansar después.",
      "Ellos querrán más comida."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo querría un café, por favor.",
      "Tú querrías ir si supieras quién va.",
      "Él querría ayudarte, pero no puede.",
      "Nosotros querríamos reservar una mesa.",
      "Vosotros querríais saber el secreto.",
      "Ellos querrían lo que hacen."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Dudo que yo quiera ir.",
      "Espero que tú quieras venir.",
      "No creo que él quiera problemas.",
      "Es posible que nosotros queramos cambiar.",
      "Ojalá que vosotros queráis participar.",
      "Es raro que ellos quieran estudiar."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Quiere a tu prójimo!",
      "Quiera usted o no.",
      "Queramos lo mejor para todos.",
      "Quered mucho a vuestros padres.",
      "Quieran lo que hacen."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo quisiera, podría hacerlo.",
      "Quería que tú quisieras venir.",
      "No creía que él quisiera problemas.",
      "Si nosotros quisiéramos, ganaríamos.",
      "Dudaba que vosotros quisierais comer eso.",
      "Era necesario que ellos quisieran participar."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he querido llamarte.",
      "Tú has querido aprender español.",
      "Ella ha querido ser doctora.",
      "Nosotros hemos querido viajar.",
      "Vosotros habéis querido descansar.",
      "Ellos han querido ayudar."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había querido ir.",
      "Tú habías querido ver.",
      "Ella había querido ser.",
      "Nosotros habíamos querido.",
      "Vosotros habíais querido.",
      "Ellos habían querido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré querido volver.",
      "Tú habrás querido saber.",
      "Ella habrá querido comprar.",
      "Nosotros habremos querido.",
      "Vosotros habréis querido.",
      "Ellos habrán querido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría querido eso.",
      "Tú habrías querido más.",
      "Ella habría querido ir.",
      "Nosotros habríamos querido.",
      "Vosotros habríais querido.",
      "Ellos habrían querido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya querido.",
      "Dudo que tú hayas querido.",
      "Es posible que ella haya querido.",
      "Ojalá nosotros hayamos querido.",
      "No creo que vosotros hayáis querido.",
      "Es bueno que ellos hayan querido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera querido, podría.",
      "Si tú hubieras querido, tendrías.",
      "Si ella hubiera querido, sería.",
      "Si nosotros hubiéramos querido, haríamos.",
      "Si vosotros hubierais querido, iríais.",
      "Si ellos hubieran querido, vendrían."
    ]
  };

export default data;
