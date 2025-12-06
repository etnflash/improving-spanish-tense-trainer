import { TenseId } from '../../../../types';

export const verb = 'saber';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo sé la respuesta a esa pregunta.",
      "Tú sabes tocar el piano.",
      "Ella sabe dónde está el restaurante.",
      "Nosotros sabemos que es verdad.",
      "Vosotros sabéis hablar francés.",
      "Ellos saben cocinar muy bien."
    ],
    [TenseId.PRETERITE]: [
      "Yo supe la noticia ayer.",
      "Tú supiste qué hacer inmediatamente.",
      "Él supo la verdad al final.",
      "Nosotros supimos llegar sin mapa.",
      "Vosotros supisteis guardar el secreto.",
      "Ellos supieron contestar todas las preguntas."
    ],
    [TenseId.IMPERFECT]: [
      "Yo sabía que vendrías.",
      "Tú sabías la lección de memoria.",
      "Él sabía mucho sobre historia.",
      "Nosotros sabíamos que era peligroso.",
      "Vosotros sabíais la respuesta.",
      "Ellos sabían nadar muy bien."
    ],
    [TenseId.FUTURE]: [
      "Yo sabré qué hacer en ese momento.",
      "Tú sabrás la verdad pronto.",
      "Él sabrá llegar solo.",
      "Nosotros sabremos los resultados mañana.",
      "Vosotros sabréis apreciar esto.",
      "Ellos sabrán comportarse."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo sabría qué decir si estuviera allí.",
      "Tú sabrías la respuesta si estudiaras.",
      "Él sabría arreglarlo.",
      "Nosotros sabríamos dónde ir.",
      "Vosotros sabríais qué elegir.",
      "Ellos sabrían que es mentira."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "No creo que yo sepa la respuesta.",
      "Espero que tú sepas lo que haces.",
      "Es importante que él sepa la verdad.",
      "Quieren que nosotros sepamos las reglas.",
      "Dudo que vosotros sepáis el camino.",
      "Es posible que ellos sepan el secreto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Sabe que te quiero!",
      "Sepa usted que no estoy de acuerdo.",
      "Sepamos perdonar.",
      "Sabed que esto es importante.",
      "Sepan que están invitados."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo supiera la respuesta, te la diría.",
      "Quería que tú supieras la verdad.",
      "No creía que él supiera conducir.",
      "Si nosotros supiéramos el camino, no nos perderíamos.",
      "Dudaba que vosotros supierais cocinar.",
      "Era necesario que ellos supieran las reglas."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he sabido la noticia hoy.",
      "Tú has sabido comportarte.",
      "Ella ha sabido aprovechar la oportunidad.",
      "Nosotros hemos sabido guardar el secreto.",
      "Vosotros habéis sabido elegir bien.",
      "Ellos han sabido la verdad al final."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había sabido eso.",
      "Tú habías sabido la respuesta.",
      "Ella había sabido qué hacer.",
      "Nosotros habíamos sabido.",
      "Vosotros habíais sabido.",
      "Ellos habían sabido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré sabido la verdad.",
      "Tú habrás sabido elegir.",
      "Ella habrá sabido llegar.",
      "Nosotros habremos sabido.",
      "Vosotros habréis sabido.",
      "Ellos habrán sabido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría sabido qué decir.",
      "Tú habrías sabido hacerlo.",
      "Ella habría sabido la respuesta.",
      "Nosotros habríamos sabido.",
      "Vosotros habríais sabido.",
      "Ellos habrían sabido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya sabido.",
      "Dudo que tú hayas sabido.",
      "Es posible que ella haya sabido.",
      "Ojalá nosotros hayamos sabido.",
      "No creo que vosotros hayáis sabido.",
      "Es bueno que ellos hayan sabido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera sabido, te diría.",
      "Si tú hubieras sabido, vendrías.",
      "Si ella hubiera sabido, lo haría.",
      "Si nosotros hubiéramos sabido, ganaríamos.",
      "Si vosotros hubierais sabido, aprobaríais.",
      "Si ellos hubieran sabido, hablarían."
    ]
  };

export default data;
