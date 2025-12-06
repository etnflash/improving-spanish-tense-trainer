import { TenseId } from '../../../../types';

export const verb = 'vivir';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo vivo en una casa pequeña cerca del parque.",
      "Tú vives en el centro de la ciudad.",
      "Usted vive en un apartamento muy bonito.",
      "Nosotros vivimos en Madrid desde hace dos años.",
      "Vosotros vivís con vuestros padres.",
      "Ellas viven juntas en la universidad."
    ],
    [TenseId.PRETERITE]: [
      "Yo viví en Barcelona por un año.",
      "Tú viviste una experiencia única.",
      "Él vivió muchos años en el extranjero.",
      "Nosotros vivimos allí durante la crisis.",
      "Vosotros vivisteis momentos difíciles.",
      "Ellos vivieron felices para siempre."
    ],
    [TenseId.IMPERFECT]: [
      "Yo vivía cerca del mar.",
      "Tú vivías con tus abuelos.",
      "Ella vivía con sus tíos en esa época.",
      "Nosotros vivíamos en un pueblo pequeño.",
      "Vosotros vivíais felices sin preocupaciones.",
      "Ellos vivían en una casa grande y antigua."
    ],
    [TenseId.FUTURE]: [
      "Yo viviré cien años.",
      "Tú vivirás grandes aventuras.",
      "Él vivirá en nuestra memoria.",
      "Nosotros viviremos juntos.",
      "Vosotros viviréis mejor allí.",
      "Ellos vivirán en paz."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo viviría allí si pudiera.",
      "Tú vivirías mejor en el campo.",
      "Él viviría feliz con poco.",
      "Nosotros viviríamos cerca de la playa.",
      "Vosotros viviríais tranquilos.",
      "Ellos vivirían como reyes."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo viva muchos años.",
      "Quiero que tú vivas tu vida.",
      "Es posible que él viva cerca.",
      "Es necesario que nosotros vivamos en paz.",
      "Dudo que vosotros viváis allí.",
      "Es mejor que ellos vivan en la planta baja."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Vive el momento!",
      "Viva su vida como quiera.",
      "Vivamos en paz.",
      "Vivid cada día con alegría.",
      "Vivan donde sean felices."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo viviera allí, te visitaría.",
      "Me gustaría que tú vivieras cerca.",
      "No creía que él viviera solo.",
      "Si nosotros viviéramos juntos, ahorraríamos.",
      "Dudaba que vosotros vivierais en esa casa.",
      "Era necesario que ellos vivieran tranquilos."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he vivido muchas cosas.",
      "Tú has vivido en muchos sitios.",
      "Ella ha vivido una buena vida.",
      "Nosotros hemos vivido siempre aquí.",
      "Vosotros habéis vivido aventuras.",
      "Ellos han vivido felices."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había vivido allí antes.",
      "Tú habías vivido eso.",
      "Ella había vivido sola.",
      "Nosotros habíamos vivido.",
      "Vosotros habíais vivido.",
      "Ellos habían vivido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré vivido todo.",
      "Tú habrás vivido mucho.",
      "Ella habrá vivido bien.",
      "Nosotros habremos vivido.",
      "Vosotros habréis vivido.",
      "Ellos habrán vivido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría vivido mejor.",
      "Tú habrías vivido allí.",
      "Ella habría vivido feliz.",
      "Nosotros habríamos vivido.",
      "Vosotros habríais vivido.",
      "Ellos habrían vivido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya vivido.",
      "Dudo que tú hayas vivido.",
      "Es posible que ella haya vivido.",
      "Ojalá nosotros hayamos vivido.",
      "No creo que vosotros hayáis vivido.",
      "Es bueno que ellos hayan vivido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera vivido antes, sabría.",
      "Si tú hubieras vivido allí, entenderías.",
      "Si ella hubiera vivido más, vería.",
      "Si nosotros hubiéramos vivido, contaríamos.",
      "Si vosotros hubierais vivido, recordaríais.",
      "Si ellos hubieran vivido, estarían."
    ]
  };

export default data;
