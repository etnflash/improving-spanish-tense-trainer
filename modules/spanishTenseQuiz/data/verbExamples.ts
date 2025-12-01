import { TenseId } from '../../../types';

export const VERB_EXAMPLES: Record<string, Partial<Record<TenseId, string[]>>> = {
  'hablar': {
    [TenseId.PRESENT]: [
      "Yo hablo español con mis amigos todos los días.",
      "Tú hablas muy rápido cuando estás nervioso.",
      "Él habla tres idiomas fluidamente.",
      "Nosotros hablamos sobre el proyecto de ciencias.",
      "Vosotros habláis mucho en clase.",
      "Ellos hablan con el profesor después de la escuela."
    ],
    [TenseId.PRETERITE]: [
      "Yo hablé con mi madre ayer por teléfono.",
      "Tú hablaste muy bien en la presentación.",
      "Ella habló con el jefe sobre el aumento.",
      "Nosotros hablamos durante horas anoche.",
      "Vosotros hablasteis del viaje la semana pasada.",
      "Ellos hablaron en voz baja durante la película."
    ],
    [TenseId.IMPERFECT]: [
      "Yo hablaba francés cuando era niño.",
      "Tú hablabas con tu abuela todos los domingos.",
      "Él hablaba mucho en clase antes.",
      "Nosotros hablábamos de nuestros sueños a menudo.",
      "Vosotros hablabais por teléfono cada noche.",
      "Ellos hablaban mientras caminaban por el parque."
    ],
    [TenseId.FUTURE]: [
      "Yo hablaré con el director mañana mismo.",
      "Tú hablarás mejor español en unos meses.",
      "Él hablará en la conferencia internacional.",
      "Nosotros hablaremos de esto más tarde.",
      "Vosotros hablaréis con vuestros padres pronto.",
      "Ellos hablarán sobre el contrato la próxima semana."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo hablaría con ella si tuviera su número.",
      "Tú hablarías más si no fueras tan tímido.",
      "Él hablaría con el jefe si fuera necesario.",
      "Nosotros hablaríamos horas sin parar.",
      "Vosotros hablaríais de fútbol todo el día.",
      "Ellos hablarían maravillas de este lugar."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es importante que yo hable con sinceridad.",
      "Quiero que tú hables con él.",
      "Dudo que él hable chino.",
      "Es necesario que nosotros hablemos bajo.",
      "Prefiero que vosotros habléis ahora.",
      "Espero que ellos hable pronto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Habla más alto, por favor!",
      "Hable usted con el encargado.",
      "Hablemos de otra cosa.",
      "Hablad con respeto.",
      "Hablen ustedes primero."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo hablara inglés, viajaría más.",
      "Me gustaría que tú hablaras con él.",
      "Dudaba que él hablara en serio.",
      "Si nosotros habláramos más, nos entenderíamos.",
      "Ojalá vosotros hablarais con la verdad.",
      "Era necesario que ellos hablaran claro."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he hablado con el director.",
      "Tú has hablado demasiado hoy.",
      "Él ha hablado muy bien de ti.",
      "Nosotros hemos hablado del tema.",
      "Vosotros habéis hablado por horas.",
      "Ellos han hablado con sus abogados."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había hablado con ella antes.",
      "Tú habías hablado de eso.",
      "Él había hablado con su jefe.",
      "Nosotros habíamos hablado por teléfono.",
      "Vosotros habíais hablado claro.",
      "Ellos habían hablado en la reunión."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré hablado con él para entonces.",
      "Tú habrás hablado con tu madre.",
      "Él habrá hablado en la conferencia.",
      "Nosotros habremos hablado del tema.",
      "Vosotros habréis hablado con todos.",
      "Ellos habrán hablado con el abogado."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría hablado si pudiera.",
      "Tú habrías hablado mejor.",
      "Él habría hablado con gusto.",
      "Nosotros habríamos hablado horas.",
      "Vosotros habríais hablado antes.",
      "Ellos habrían hablado de política."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya hablado bien.",
      "Dudo que tú hayas hablado con él.",
      "Es posible que él haya hablado.",
      "Ojalá nosotros hayamos hablado suficiente.",
      "No creo que vosotros hayáis hablado.",
      "Es bueno que ellos hayan hablado."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera hablado, sabrían la verdad.",
      "Si tú hubieras hablado, te habrían escuchado.",
      "Si él hubiera hablado, todo sería diferente.",
      "Si nosotros hubiéramos hablado, no habría problemas.",
      "Si vosotros hubierais hablado, estaríamos bien.",
      "Si ellos hubieran hablado, habríamos entendido."
    ]
  },
  'comer': {
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
  },  "Es mejor que ellos vivan en la planta baja."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Vive el momento!",
      "Viva su vida como quiera.",
      "Vivamos en paz.",
      "Vivid cada día con alegría.",
      "Vivan donde sean felices."
    ]
  },
  'ser': {a despacio, por favor.",
      "Comamos en el jardín.",
      "Comed todo lo que hay en el plato.",
      "Coman antes de que se enfríe."
    ]
  },
  'vivir': {
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
  },
  'ser': {
    [TenseId.PRESENT]: [
      "Yo soy estudiante de medicina.",
      "Tú eres mi mejor amigo.",
      "Él es alto y muy inteligente.",
      "Nosotros somos hermanos.",
      "Vosotros sois de Argentina, ¿verdad?",
      "Ellos son muy amables con los turistas."
    ],
    [TenseId.PRETERITE]: [
      "Yo fui el ganador del concurso.",
      "Tú fuiste muy valiente.",
      "Él fue un gran líder.",
      "Nosotros fuimos los primeros en llegar.",
      "Vosotros fuisteis testigos.",
      "Ellos fueron muy generosos."
    ],
    [TenseId.IMPERFECT]: [
      "Yo era muy tímido de niño.",
      "Tú eras el más rápido de la clase.",
      "Ella era una gran cantante en su juventud.",
      "Nosotros éramos inseparables.",
      "Vosotros erais muy traviesos.",
      "Ellos eran vecinos nuestros."
    ],
    [TenseId.FUTURE]: [
      "Yo seré médico cuando sea grande.",
      "Tú serás un gran artista.",
      "Ella será la próxima presidenta.",
      "Nosotros seremos amigos para siempre.",
      "Vosotros seréis bienvenidos siempre.",
      "Ellos serán famosos algún día."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo sería más feliz si tuviera vacaciones.",
      "Tú serías perfecto para este trabajo.",
      "Ella sería una buena madre.",
      "Nosotros seríamos un gran equipo.",
      "Vosotros seríais capaces de hacerlo.",
      "Ellos serían buenos candidatos."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "No importa quién yo sea.",
      "Espero que tú seas feliz.",
      "Es posible que ella sea la elegida.",
      "Es importante que nosotros seamos honestos.",
      "Quiero que vosotros seáis puntuales.",
      "Dudo que ellos sean culpables."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Sé tú mismo!",
      "Sea amable con los demás.",
      "Seamos realistas.",
      "Sed valientes.",
      "Sean bienvenidos a mi casa."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo fuera rico, viajaría por el mundo.",
      "Quería que tú fueras mi amigo.",
      "No creía que eso fuera verdad.",
      "Si nosotros fuéramos valientes, lo haríamos.",
      "Me gustaría que vosotros fuerais sinceros.",
      "Dudaba que ellos fueran capaces."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he sido muy feliz aquí.",
      "Tú has sido un buen estudiante.",
      "Ella ha sido amable conmigo.",
      "Nosotros hemos sido amigos por años.",
      "Vosotros habéis sido muy pacientes.",
      "Ellos han sido los primeros en llegar."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había sido profesor antes.",
      "Tú habías sido muy amable.",
      "Ella había sido la mejor.",
      "Nosotros habíamos sido amigos.",
      "Vosotros habíais sido testigos.",
      "Ellos habían sido informados."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré sido olvidado.",
      "Tú habrás sido ascendido.",
      "Ella habrá sido madre.",
      "Nosotros habremos sido felices.",
      "Vosotros habréis sido los elegidos.",
      "Ellos habrán sido descubiertos."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría sido médico.",
      "Tú habrías sido un buen padre.",
      "Ella habría sido famosa.",
      "Nosotros habríamos sido ricos.",
      "Vosotros habríais sido libres.",
      "Ellos habrían sido castigados."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya sido útil.",
      "Dudo que tú hayas sido sincero.",
      "Es posible que ella haya sido.",
      "Ojalá nosotros hayamos sido justos.",
      "No creo que vosotros hayáis sido.",
      "Es bueno que ellos hayan sido honestos."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera sido valiente, lo haría.",
      "Si tú hubieras sido más rápido, ganarías.",
      "Si ella hubiera sido amable, tendría amigos.",
      "Si nosotros hubiéramos sido listos, tendríamos dinero.",
      "Si vosotros hubierais sido puntuales, entraríais.",
      "Si ellos hubieran sido cuidadosos, no pasaría."
    ]
  },
  'estar': {
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
  },
  'ir': {
    [TenseId.PRESENT]: [
      "Yo voy al cine esta noche.",
      "Tú vas a la escuela en autobús.",
      "Él va al gimnasio todos los días.",
      "Nosotros vamos de vacaciones a la playa.",
      "Vosotros vais a la fiesta de cumpleaños.",
      "Ellos van al supermercado los domingos."
    ],
    [TenseId.PRETERITE]: [
      "Yo fui al médico ayer.",
      "Tú fuiste a la playa el fin de semana.",
      "Ella fue a comprar pan.",
      "Nosotros fuimos al concierto juntos.",
      "Vosotros fuisteis al parque de atracciones.",
      "Ellos fueron a visitar a sus abuelos."
    ],
    [TenseId.IMPERFECT]: [
      "Yo iba a la escuela caminando.",
      "Tú ibas al gimnasio todas las tardes.",
      "Él iba a visitar a su novia cada viernes.",
      "Nosotros íbamos a la playa todos los veranos.",
      "Vosotros ibais al cine los sábados.",
      "Ellos iban a misa los domingos."
    ],
    [TenseId.FUTURE]: [
      "Yo iré a verte mañana.",
      "Tú irás a la universidad el próximo año.",
      "Él irá al médico si no mejora.",
      "Nosotros iremos de compras el sábado.",
      "Vosotros iréis primero.",
      "Ellos irán en avión a Londres."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo iría si tuviera tiempo.",
      "Tú irías al fin del mundo por ella.",
      "Él iría encantado a la fiesta.",
      "Nosotros iríamos, pero no tenemos coche.",
      "Vosotros iríais si os invitaran.",
      "Ellos irían más a menudo si vivieran cerca."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es posible que yo vaya más tarde.",
      "No quiero que tú vayas solo.",
      "Es necesario que él vaya al hospital.",
      "Ojalá que nosotros vayamos juntos.",
      "Espero que vosotros vayáis con cuidado.",
      "Dudo que ellos vayan a venir."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ve a tu cuarto!",
      "Vaya con Dios.",
      "Vayamos al grano.",
      "Id con cuidado.",
      "Vayan por la sombra."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo fuera a la fiesta, te avisaría.",
      "Quería que tú fueras al médico.",
      "No creía que él fuera capaz de ir.",
      "Si nosotros fuéramos juntos, sería mejor.",
      "Dudaba que vosotros fuerais a pie.",
      "Era necesario que ellos fueran temprano."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he ido al cine esta semana.",
      "Tú has ido a esa tienda antes.",
      "Ella ha ido a visitar a su abuela.",
      "Nosotros hemos ido de excursión.",
      "Vosotros habéis ido demasiado lejos.",
      "Ellos han ido a la playa."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había ido allí antes.",
      "Tú habías ido sin avisar.",
      "Ella había ido al médico.",
      "Nosotros habíamos ido juntos.",
      "Vosotros habíais ido en coche.",
      "Ellos habían ido a pie."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré ido y vuelto.",
      "Tú habrás ido a la fiesta.",
      "Ella habrá ido a trabajar.",
      "Nosotros habremos ido de viaje.",
      "Vosotros habréis ido al cine.",
      "Ellos habrán ido a dormir."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría ido si pudiera.",
      "Tú habrías ido con ella.",
      "Ella habría ido sola.",
      "Nosotros habríamos ido antes.",
      "Vosotros habríais ido después.",
      "Ellos habrían ido en avión."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya ido bien.",
      "Dudo que tú hayas ido.",
      "Es posible que ella haya ido.",
      "Ojalá nosotros hayamos ido.",
      "No creo que vosotros hayáis ido.",
      "Es bueno que ellos hayan ido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera ido, te habría visto.",
      "Si tú hubieras ido, te divertirías.",
      "Si ella hubiera ido, estaría feliz.",
      "Si nosotros hubiéramos ido, ganaríamos.",
      "Si vosotros hubierais ido, sabríais.",
      "Si ellos hubieran ido, comerían."
    ]
  },
  'tener': {
    [TenseId.PRESENT]: [
      "Yo tengo un perro y dos gatos.",
      "Tú tienes mucha suerte.",
      "Ella tiene una reunión importante hoy.",
      "Nosotros tenemos hambre.",
      "Vosotros tenéis que estudiar para el examen.",
      "Ellos tienen una casa en la montaña."
    ],
    [TenseId.PRETERITE]: [
      "Yo tuve un problema con el coche.",
      "Tú tuviste una buena idea.",
      "Ella tuvo que salir temprano.",
      "Nosotros tuvimos mucha suerte.",
      "Vosotros tuvisteis la oportunidad de viajar.",
      "Ellos tuvieron un accidente leve."
    ],
    [TenseId.IMPERFECT]: [
      "Yo tenía el pelo largo hace años.",
      "Tú tenías muchos juguetes.",
      "Él tenía miedo a la oscuridad.",
      "Nosotros teníamos una casa en el campo.",
      "Vosotros teníais razón en la discusión.",
      "Ellos tenían mucho dinero antes."
    ],
    [TenseId.FUTURE]: [
      "Yo tendré mucho trabajo mañana.",
      "Tú tendrás una sorpresa en tu cumpleaños.",
      "Ella tendrá un bebé pronto.",
      "Nosotros tendremos que esperar.",
      "Vosotros tendréis éxito en el futuro.",
      "Ellos tendrán que decidir ahora."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo tendría un perro si mi piso fuera más grande.",
      "Tú tendrías frío sin abrigo.",
      "Ella tendría cuidado en tu lugar.",
      "Nosotros tendríamos problemas si se enteran.",
      "Vosotros tendríais más amigos si fuerais amables.",
      "Ellos tendrían que haber llegado ya."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo tenga suerte.",
      "Ojalá que tú tengas éxito.",
      "Es necesario que ella tenga cuidado.",
      "Coman antes de que se enfríe."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo tuviera dinero, compraría un coche.",
      "Quería que tú tuvieras cuidado.",
      "No creía que él tuviera razón.",
      "Si nosotros tuviéramos tiempo, iríamos.",
      "Dudaba que vosotros tuvierais problemas.",
      "Era imposible que ellos tuvieran miedo."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he tenido un día largo.",
      "Tú has tenido mucha suerte.",
      "Ella ha tenido una buena idea.",
      "Nosotros hemos tenido que esperar.",
      "Vosotros habéis tenido paciencia.",
      "Ellos han tenido éxito."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había tenido un perro.",
      "Tú habías tenido suerte.",
      "Ella había tenido fiebre.",
      "Nosotros habíamos tenido problemas.",
      "Vosotros habíais tenido tiempo.",
      "Ellos habían tenido miedo."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré tenido hijos.",
      "Tú habrás tenido éxito.",
      "Ella habrá tenido cuidado.",
      "Nosotros habremos tenido noticias.",
      "Vosotros habréis tenido paciencia.",
      "Ellos habrán tenido oportunidades."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría tenido más dinero.",
      "Tú habrías tenido razón.",
      "Ella habría tenido un gato.",
      "Nosotros habríamos tenido que ir.",
      "Vosotros habríais tenido frío.",
      "Ellos habrían tenido hambre."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya tenido suerte.",
      "Dudo que tú hayas tenido tiempo.",
      "Es posible que ella haya tenido.",
      "Ojalá nosotros hayamos tenido.",
      "No creo que vosotros hayáis tenido.",
      "Es bueno que ellos hayan tenido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera tenido dinero, viajaría.",
      "Si tú hubieras tenido cuidado, no caerías.",
      "Si ella hubiera tenido tiempo, vendría.",
      "Si nosotros hubiéramos tenido suerte, ganaríamos.",
      "Si vosotros hubierais tenido paciencia, esperaríais.",
      "Si ellos hubieran tenido hambre, comerían."
    ]
  },
  'caminar': {
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
  },
  'beber': { un buen día.",
      "Tengamos fe.",
      "Tened paciencia.",
      "Tengan sus pasaportes listos."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo tuviera dinero, compraría un coche.",
      "Quería que tú tuvieras cuidado.",
      "No creía que él tuviera razón.",
      "Si nosotros tuviéramos tiempo, iríamos.",
      "Dudaba que vosotros tuvierais problemas.",
      "Era imposible que ellos tuvieran miedo."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he tenido un día largo.",
      "Tú has tenido mucha suerte.",
      "Ella ha tenido una buena idea.",
      "Nosotros hemos tenido que esperar.",
      "Vosotros habéis tenido paciencia.",
      "Ellos han tenido éxito."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había tenido un perro.",
      "Tú habías tenido suerte.",
      "Ella había tenido fiebre.",
      "Nosotros habíamos tenido problemas.",
      "Vosotros habíais tenido tiempo.",
      "Ellos habían tenido miedo."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré tenido hijos.",
      "Tú habrás tenido éxito.",
      "Ella habrá tenido cuidado.",
      "Nosotros habremos tenido noticias.",
      "Vosotros habréis tenido paciencia.",
      "Ellos habrán tenido oportunidades."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría tenido más dinero.",
      "Tú habrías tenido razón.",
      "Ella habría tenido un gato.",
      "Nosotros habríamos tenido que ir.",
      "Vosotros habríais tenido frío.",
      "Ellos habrían tenido hambre."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya tenido suerte.",
      "Dudo que tú hayas tenido tiempo.",
      "Es posible que ella haya tenido.",
      "Ojalá nosotros hayamos tenido.",
      "No creo que vosotros hayáis tenido.",
      "Es bueno que ellos hayan tenido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera tenido dinero, viajaría.",
      "Si tú hubieras tenido cuidado, no caerías.",
      "Si ella hubiera tenido tiempo, vendría.",
      "Si nosotros hubiéramos tenido suerte, ganaríamos.",
      "Si vosotros hubierais tenido paciencia, esperaríais.",
      "Si ellos hubieran tenido hambre, comerían."
    ]
  },
  'caminar': {
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
  },
  'beber': {
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
  },
  'escribir': {
    [TenseId.PRESENT]: [
      "Yo escribo un correo electrónico a mi jefe.",
      "Tú escribes poemas muy bonitos.",
      "Él escribe en su diario cada noche.",
      "Nosotros escribimos un libro juntos.",
      "Vosotros escribís cartas a vuestros abuelos.",
      "Ellos escriben las respuestas en el cuaderno."
    ],
    [TenseId.PRETERITE]: [
      "Yo escribí una carta de amor.",
      "Tú escribiste un ensayo excelente.",
      "Él escribió su nombre en la arena.",
      "Nosotros escribimos el informe ayer.",
      "Vosotros escribisteis la lista de compras.",
      "Ellos escribieron una queja."
    ],
    [TenseId.IMPERFECT]: [
      "Yo escribía cuentos cuando era joven.",
      "Tú escribías con la mano izquierda.",
      "Él escribía cartas a su familia cada semana.",
      "Nosotros escribíamos notas en clase.",
      "Vosotros escribíais en la pizarra.",
      "Ellos escribían muy rápido."
    ],
    [TenseId.FUTURE]: [
      "Yo escribiré un libro sobre mi vida.",
      "Tú escribirás la respuesta correcta.",
      "Él escribirá un artículo para la revista.",
      "Nosotros escribiremos una carta de queja.",
      "Vosotros escribiréis vuestros nombres aquí.",
      "Ellos escribirán el informe final."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo escribiría más a menudo si tuviera tiempo.",
      "Tú escribirías mejor con un buen bolígrafo.",
      "Él escribiría una novela si tuviera una idea.",
      "Nosotros escribiríamos la letra de la canción.",
      "Vosotros escribiríais a vuestros amigos.",
      "Escriban las respuestas en la hoja."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es necesario que yo escriba esto.",
      "Quiero que tú escribas lo que piensas.",
      "Es posible que él escriba un bestseller.",
      "Piden que nosotros escribamos en azul.",
      "Espero que vosotros escribáis pronto.",
      "Dudo que ellos escriban la verdad."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Escribe tu nombre!",
      "Escriba aquí, por favor.",
      "Escribamos una nueva historia.",
      "Escribid con letra clara.",
      "Escriban las respuestas en la hoja."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo escribiera un libro, sería de misterio.",
      "Me gustaría que tú escribieras una carta.",
      "Dudaba que él escribiera poemas.",
      "Si nosotros escribiéramos el informe, estaría listo.",
      "Ojalá vosotros escribierais más a menudo.",
      "Era necesario que ellos escribieran sus nombres."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he escrito un correo electrónico.",
      "Tú has escrito una novela.",
      "Ella ha escrito en su diario.",
      "Nosotros hemos escrito la tarea.",
      "Vosotros habéis escrito mal la dirección.",
      "Ellos han escrito una queja."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había escrito una carta.",
      "Tú habías escrito un libro.",
      "Ella había escrito un poema.",
      "Nosotros habíamos escrito.",
      "Vosotros habíais escrito.",
      "Ellos habían escrito."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré escrito el informe.",
      "Tú habrás escrito la nota.",
      "Ella habrá escrito todo.",
      "Nosotros habremos escrito.",
      "Vosotros habréis escrito.",
      "Ellos habrán escrito."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría escrito más.",
      "Tú habrías escrito mejor.",
      "Ella habría escrito eso.",
      "Nosotros habríamos escrito.",
      "Vosotros habríais escrito.",
      "Ellos habrían escrito."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya escrito bien.",
      "Dudo que tú hayas escrito.",
      "Es posible que ella haya escrito.",
      "Ojalá nosotros hayamos escrito.",
      "No creo que vosotros hayáis escrito.",
      "Es bueno que ellos hayan escrito."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera escrito, me leerían.",
      "Si tú hubieras escrito, sabrían.",
      "Si ella hubiera escrito, responderían.",
      "Si nosotros hubiéramos escrito, tendríamos.",
      "Si vosotros hubierais escrito, veríais.",
      "Si ellos hubieran escrito, ganarían."
    ]
  },
  'hacer': {
    [TenseId.PRESENT]: [
      "Yo hago mi tarea antes de cenar.",
      "Tú haces mucho ruido cuando comes.",
      "Ella hace ejercicio en el gimnasio.",
      "Nosotros hacemos un pastel para el cumpleaños.",
      "Vosotros hacéis un buen trabajo.",
      "Ellos hacen planes para el fin de semana."
    ],
    [TenseId.PRETERITE]: [
      "Yo hice la cama esta mañana.",
      "Tú hiciste lo correcto.",
      "Él hizo una pregunta interesante.",
      "Nosotros hicimos un viaje inolvidable.",
      "Vosotros hicisteis mucho ruido anoche.",
      "Ellos hicieron un gran esfuerzo."
    ],
    [TenseId.IMPERFECT]: [
      "Yo hacía deporte todos los días.",
      "Tú hacías los deberes por la tarde.",
      "Él hacía reír a todos.",
      "Nosotros hacíamos castillos de arena.",
      "Vosotros hacíais siempre lo mismo.",
      "Ellos hacían cola para entrar."
    ],
    [TenseId.FUTURE]: [
      "Yo haré lo que sea necesario.",
      "Tú harás nuevos amigos en la escuela.",
      "Él hará una fiesta de despedida.",
      "Nosotros haremos un viaje a Italia.",
      "Vosotros haréis el examen mañana.",
      "Ellos harán un gran trabajo."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo haría cualquier cosa por ti.",
      "Tú harías lo mismo en mi lugar.",
      "Él haría más ejercicio si tuviera tiempo.",
      "Nosotros haríamos una pausa ahora.",
      "Vosotros haríais bien en escuchar.",
      "Ellos harían menos ruido si pudieran."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Es importante que yo haga ejercicio.",
      "No quiero que tú hagas eso.",
      "Es posible que él haga una excepción.",
      "Esperan que nosotros hagamos el trabajo.",
      "Dudo que vosotros hagáis trampa.",
      "Es necesario que ellos hagan la cama."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Haz tu tarea!",
      "Haga lo que le digo.",
      "Hagamos un trato.",
      "Haced vuestro mejor esfuerzo.",
      "Hagan silencio, por favor."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo hiciera ejercicio, estaría más fuerte.",
      "Quería que tú hicieras la cama.",
      "No creía que él hiciera eso.",
      "Si nosotros hiciéramos un esfuerzo, ganaríamos.",
      "Dudaba que vosotros hicierais caso.",
      "Era necesario que ellos hicieran la tarea."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he hecho la cena.",
      "Tú has hecho un buen trabajo.",
      "Ella ha hecho muchas preguntas.",
      "Nosotros hemos hecho planes.",
      "Vosotros habéis hecho ruido.",
      "Ellos han hecho lo correcto."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había hecho la tarea.",
      "Tú habías hecho un dibujo.",
      "Ella había hecho una tarta.",
      "Nosotros habíamos hecho ruido.",
      "Vosotros habíais hecho planes.",
      "Ellos habían hecho amigos."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré hecho todo.",
      "Tú habrás hecho lo mejor.",
      "Ella habrá hecho el examen.",
      "Nosotros habremos hecho las paces.",
      "Vosotros habréis hecho el viaje.",
      "Ellos habrán hecho historia."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría hecho eso.",
      "Tú habrías hecho lo mismo.",
      "Ella habría hecho caso.",
      "Nosotros habríamos hecho una fiesta.",
      "Vosotros habríais hecho bien.",
      "Ellos habrían hecho daño."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya hecho bien.",
      "Dudo que tú hayas hecho eso.",
      "Es posible que ella haya hecho.",
      "Ojalá nosotros hayamos hecho.",
      "No creo que vosotros hayáis hecho.",
      "Es bueno que ellos hayan hecho."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera hecho caso, no pasaría.",
      "Si tú hubieras hecho la tarea, jugarías.",
      "Si ella hubiera hecho ejercicio, estaría fuerte.",
      "Si nosotros hubiéramos hecho planes, saldríamos.",
      "Si vosotros hubierais hecho silencio, oiríais.",
      "Si ellos hubieran hecho el trabajo, cobrarían."
    ]
  },
  'poder': {
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
  },
  'decir': {
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
  },
  'ver': {
    [TenseId.PRESENT]: [
      "Yo veo la televisión por la noche.",
      "Tú ves el pájaro en el árbol.",
      "Usted ve el problema claramente.",
      "Nosotros vemos a nuestros abuelos los domingos.",
      "Vosotros veis el partido de fútbol.",
      "Ellos ven muchas películas de acción."
    ],
    [TenseId.PRETERITE]: [
      "Yo vi esa película ayer.",
      "Tú viste a Juan en el parque.",
      "Él vio un accidente en la calle.",
      "Nosotros vimos el amanecer juntos.",
      "Vosotros visteis el museo la semana pasada.",
      "Ellos vieron llegar el tren."
    ],
    [TenseId.IMPERFECT]: [
      "Yo veía dibujos animados los sábados.",
      "Tú veías a tus amigos cada tarde.",
      "Él veía mal sin gafas.",
      "Nosotros veíamos la televisión después de cenar.",
      "Vosotros veíais el mar desde vuestra casa.",
      "Ellos veían venir la tormenta."
    ],
    [TenseId.FUTURE]: [
      "Yo veré qué puedo hacer.",
      "Tú verás que tengo razón.",
      "Él verá a su familia en Navidad.",
      "Nosotros veremos el partido en casa.",
      "Vosotros veréis los resultados pronto.",
      "Ellos han visto todo lo que pasó."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había visto esa película.",
      "Tú habías visto al ladrón.",
      "Ella había visto el mar.",
      "Nosotros habíamos visto.",
      "Vosotros habíais visto.",
      "Ellos habían visto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré visto el mundo.",
      "Tú habrás visto el final.",
      "Ella habrá visto todo.",
      "Nosotros habremos visto.",
      "Vosotros habréis visto.",
      "Ellos habrán visto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría visto eso.",
      "Tú habrías visto mejor.",
      "Ella habría visto la señal.",
      "Nosotros habríamos visto.",
      "Vosotros habríais visto.",
      "Ellos habrían visto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya visto bien.",
      "Dudo que tú hayas visto.",
      "Es posible que ella haya visto.",
      "Ojalá nosotros hayamos visto.",
      "No creo que vosotros hayáis visto.",
      "Es bueno que ellos hayan visto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera visto, avisaría.",
      "Si tú hubieras visto, gritarías.",
      "Si ella hubiera visto, lloraría.",
      "Si nosotros hubiéramos visto, correríamos.",
      "Si vosotros hubierais visto, sabríais.",
      "Si ellos hubieran visto, vendrían."
    ]
  },
  'querer': {
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
  },
  'saber': {
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
  },
  'dar': {
    [TenseId.PRESENT]: [
      "Yo doy un regalo a mi madre.",
      "Tú das consejos muy buenos.",
      "Él da de comer al perro.",
      "Nosotros damos una fiesta el sábado.",
      "Vosotros dais las gracias por la ayuda.",
      "Ellos dan un paseo por el parque."
    ],
    [TenseId.PRETERITE]: [
      "Yo di una vuelta por el barrio.",
      "Tú diste en el clavo.",
      "Él dio un discurso emocionante.",
      "Nosotros dimos dinero a la caridad.",
      "Vosotros disteis un susto a María.",
      "Ellos dieron la bienvenida a los invitados."
    ],
    [TenseId.IMPERFECT]: [
      "Yo daba clases de inglés.",
      "Tú dabas siempre lo mejor de ti.",
      "Él daba paseos largos por la playa.",
      "Nosotros dábamos comida a los pájaros.",
      "Vosotros dabais muchos problemas.",
      "Ellos daban fiestas todos los fines de semana."
    ],
    [TenseId.FUTURE]: [
      "Yo daré una fiesta el sábado.",
      "Tú darás una buena impresión.",
      "Él dará su opinión al respecto.",
      "Nosotros daremos lo mejor de nosotros.",
      "Vosotros daréis un paseo mañana.",
      "Ellos darán dinero a los pobres."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo daría todo por ti.",
      "Tú darías miedo con ese disfraz.",
      "Él daría cualquier cosa por ir.",
      "Nosotros daríamos una vuelta si no lloviera.",
      "Vosotros daríais las gracias si fuerais educados.",
      "Ellos darían saltos de alegría."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo dé una buena charla.",
      "Quiero que tú des un buen consejo.",
      "Es posible que él dé el discurso.",
      "Ojalá nosotros demos una buena impresión.",
      "Dudo que vosotros deis la talla.",
      "Es necesario que ellos den su opinión."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Da gracias!",
      "Dé su opinión, por favor.",
      "Demos un aplauso.",
      "Dad un paso adelante.",
      "Den un paso adelante."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo diera más, me quedaría sin nada.",
      "Quería que tú me dieras una oportunidad.",
      "No creía que él diera problemas.",
      "Si nosotros diéramos dinero, ayudaríamos.",
      "Dudaba que vosotros dierais las gracias.",
      "Era necesario que ellos dieran su opinión."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he dado todo por este proyecto.",
      "Tú has dado en el clavo.",
      "Ella ha dado una conferencia.",
      "Nosotros hemos dado un paseo.",
      "Vosotros habéis dado mucho de qué hablar.",
      "Ellos han dado su consentimiento."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había dado todo.",
      "Tú habías dado mucho.",
      "Ella había dado una fiesta.",
      "Nosotros habíamos dado.",
      "Vosotros habíais dado.",
      "Ellos habían dado."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré dado mi opinión.",
      "Tú habrás dado el regalo.",
      "Ella habrá dado a luz.",
      "Nosotros habremos dado.",
      "Vosotros habréis dado.",
      "Ellos habrán dado."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría dado más.",
      "Tú habrías dado menos.",
      "Ella habría dado las gracias.",
      "Nosotros habríamos dado.",
      "Vosotros habríais dado.",
      "Ellos habrían dado."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya dado.",
      "Dudo que tú hayas dado.",
      "Es posible que ella haya dado.",
      "Ojalá nosotros hayamos dado.",
      "No creo que vosotros hayáis dado.",
      "Es bueno que ellos hayan dado."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera dado, recibiría.",
      "Si tú hubieras dado, tendrías.",
      "Si ella hubiera dado, sería feliz.",
      "Si nosotros hubiéramos dado, ayudaríamos.",
      "Si vosotros hubierais dado, veríais.",
      "Si ellos hubieran dado, sabrían."
    ]
  },
  'venir': {
    [TenseId.PRESENT]: [
      "Yo vengo del trabajo ahora mismo.",
      "Tú vienes a mi casa mañana.",
      "Ella viene con nosotros al cine.",
      "Nosotros venimos a estudiar aquí siempre.",
      "Vosotros venís en coche o en tren.",
      "Ellos vienen a la reunión tarde."
    ],
    [TenseId.PRETERITE]: [
      "Yo vine a verte ayer.",
      "Tú viniste muy rápido.",
      "Él vino desde muy lejos.",
      "Nosotros vinimos en taxi.",
      "Vosotros vinisteis a la hora acordada.",
      "Ellos vinieron a la fiesta sorpresa."
    ],
    [TenseId.IMPERFECT]: [
      "Yo venía caminando cuando empezó a llover.",
      "Tú venías a visitarnos a menudo.",
      "Él venía de trabajar cansado.",
      "Nosotros veníamos cantando en el coche.",
      "Vosotros veníais siempre en verano.",
      "Ellos venían a jugar a nuestra casa."
    ],
    [TenseId.FUTURE]: [
      "Yo vendré a buscarte a las cinco.",
      "Tú vendrás a mi boda, ¿verdad?",
      "Él vendrá si tiene tiempo.",
      "Nosotros vendremos el próximo mes.",
      "Vosotros vendréis en tren.",
      "Ellos vendrán a vivir aquí."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo vendría si me invitaran.",
      "Tú vendrías más a menudo si vivieras cerca.",
      "Él vendría corriendo si supiera esto.",
      "Nosotros vendríamos encantados.",
      "Vosotros vendríais si no tuvierais trabajo.",
      "Ellos vendrían a la fiesta sin dudarlo."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo venga a tiempo.",
      "Quiero que tú vengas conmigo.",
      "Es posible que él venga mañana.",
      "Ojalá que nosotros vengamos más seguido.",
      "Dudo que vosotros vengáis hoy.",
      "Es necesario que ellos vengan pronto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ven aquí ahora mismo!",
      "Venga usted por favor.",
      "Vengamos a un acuerdo.",
      "Venid a ver esto.",
      "Vengan a comer."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo viniera mañana, ¿estarías?",
      "Me gustaría que tú vinieras a mi fiesta.",
      "No creía que él viniera solo.",
      "Si nosotros viniéramos en coche, tardaríamos menos.",
      "Dudaba que vosotros vinierais tan tarde.",
      "Era imposible que ellos vinieran hoy."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he venido a verte.",
      "Tú has venido muy elegante.",
      "Ella ha venido desde lejos.",
      "Nosotros hemos venido a trabajar.",
      "Vosotros habéis venido en tren.",
      "Ellos han venido a quejarse."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había venido antes.",
      "Tú habías venido ayer.",
      "Ella había venido sola.",
      "Nosotros habíamos venido.",
      "Vosotros habíais venido.",
      "Ellos habían venido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré venido para entonces.",
      "Tú habrás venido ya.",
      "Ella habrá venido a verte.",
      "Nosotros habremos venido.",
      "Vosotros habréis venido.",
      "Ellos habrán venido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría venido si pudiera.",
      "Tú habrías venido conmigo.",
      "Ella habría venido en coche.",
      "Nosotros habríamos venido.",
      "Vosotros habríais venido.",
      "Ellos habrían venido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya venido.",
      "Dudo que tú hayas venido.",
      "Es posible que ella haya venido.",
      "Ojalá nosotros hayamos venido.",
      "No creo que vosotros hayáis venido.",
      "Es bueno que ellos hayan venido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera venido, te vería.",
      "Si tú hubieras venido, te divertirías.",
      "Si ella hubiera venido, estaría aquí.",
      "Si nosotros hubiéramos venido, comeríamos.",
      "Si vosotros hubierais venido, sabríais.",
      "Si ellos hubieran venido, ayudarían."
    ]
  },
  'poner': {
    [TenseId.PRESENT]: [
      "Yo pongo el libro en la mesa.",
      "Tú pones música para bailar.",
      "Usted pone azúcar en su café.",
      "Nosotros ponemos la televisión.",
      "Vosotros ponéis atención en clase.",
      "Ellos ponen las maletas en el coche."
    ],
    [TenseId.PRETERITE]: [
      "Yo puse las llaves en el cajón.",
      "Tú pusiste la mesa muy bonita.",
      "Él se puso el abrigo.",
      "Nosotros pusimos el cartel en la pared.",
      "Vosotros pusisteis mucho esfuerzo.",
      "Ellos pusieron una queja."
    ],
    [TenseId.IMPERFECT]: [
      "Yo ponía la radio todas las mañanas.",
      "Tú ponías excusas siempre.",
      "Él ponía cara de sorpresa.",
      "Nosotros poníamos el árbol de Navidad juntos.",
      "Vosotros poníais la música muy alta.",
      "Ellos ponían las reglas del juego."
    ],
    [TenseId.FUTURE]: [
      "Yo pondré la mesa para la cena.",
      "Tú pondrás el despertador a las siete.",
      "Él pondrá todo su esfuerzo.",
      "Nosotros pondremos fin a esta discusión.",
      "Vosotros pondréis las flores en el jarrón.",
      "Ellos pondrán una denuncia."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo me pondría ese vestido.",
      "Tú pondrías el grito en el cielo.",
      "Él pondría más interés si le pagaran más.",
      "Nosotros pondríamos una queja.",
      "Vosotros pondríais la calefacción.",
      "Ellos pondrían solución al problema."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo ponga bien la dirección.",
      "Quiero que tú pongas atención.",
      "Es necesario que él ponga de su parte.",
      "Ojalá que nosotros pongamos música.",
      "Dudo que vosotros pongáis pegas.",
      "Es posible que ellos pongan una película."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Pon la mesa!",
      "Ponga su firma aquí.",
      "Pongamos las cosas en su sitio.",
      "Poned atención a la clase.",
      "Pongan sus teléfonos en silencio."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo pusiera atención, aprendería.",
      "Quería que tú pusieras la mesa.",
      "No creía que él pusiera excusas.",
      "Si nosotros pusiéramos música, bailaríamos.",
      "Dudaba que vosotros pusierais interés.",
      "Era necesario que ellos pusieran orden."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he puesto la mesa.",
      "Tú has puesto la radio.",
      "Ella se ha puesto un vestido rojo.",
      "Nosotros hemos puesto todo nuestro empeño.",
      "Vosotros os habéis puesto de acuerdo.",
      "Ellos han puesto una denuncia."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había puesto la mesa.",
      "Tú habías puesto música.",
      "Ella había puesto orden.",
      "Nosotros habíamos puesto.",
      "Vosotros habíais puesto.",
      "Ellos habían puesto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré puesto fin a esto.",
      "Tú habrás puesto tu parte.",
      "Ella habrá puesto la radio.",
      "Nosotros habremos puesto.",
      "Vosotros habréis puesto.",
      "Ellos habrán puesto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría puesto más.",
      "Tú habrías puesto menos.",
      "Ella habría puesto flores.",
      "Nosotros habríamos puesto.",
      "Vosotros habríais puesto.",
      "Ellos habrían puesto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya puesto.",
      "Dudo que tú hayas puesto.",
      "Es posible que ella haya puesto.",
      "Ojalá nosotros hayamos puesto.",
      "No creo que vosotros hayáis puesto.",
      "Es bueno que ellos hayan puesto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera puesto atención, sabría.",
      "Si tú hubieras puesto la mesa, comeríamos.",
      "Si ella hubiera puesto música, bailaríamos.",
      "Si nosotros hubiéramos puesto interés, ganaríamos.",
      "Si vosotros hubierais puesto cuidado, no romperíais.",
      "Si ellos hubieran puesto dinero, comprarían."
    ]
  },
  'salir': {
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
  },
  'volver': {
    [TenseId.PRESENT]: [
      "Yo vuelvo a casa después de la escuela.",
      "Tú vuelves temprano hoy.",
      "Ella vuelve de su viaje mañana.",
      "Nosotros volvemos a intentarlo.",
      "Vosotros volvéis al mismo restaurante.",
      "Ellos vuelven cansados del partido."
    ],
    [TenseId.PRETERITE]: [
      "Yo volví a llamar más tarde.",
      "Tú volviste a cometer el mismo error.",
      "Él volvió a su país natal.",
      "Nosotros volvimos a vernos después de años.",
      "Vosotros volvisteis antes de lo esperado.",
      "Ellos volvieron a empezar."
    ],
    [TenseId.IMPERFECT]: [
      "Yo volvía a casa cuando te vi.",
      "Tú volvías siempre por el mismo camino.",
      "Él volvía tarde del trabajo.",
      "Nosotros volvíamos a ser amigos.",
      "Vosotros volvíais cada Navidad.",
      "Ellos volvían a contar la misma historia."
    ],
    [TenseId.FUTURE]: [
      "Yo volveré pronto.",
      "Tú volverás a verla.",
      "Él volverá a intentarlo.",
      "Nosotros volveremos el año que viene.",
      "Vosotros volveréis a casa cansados.",
      "Ellos volverán a ganar."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo volvería si me perdonaras.",
      "Tú volverías a hacerlo si pudieras.",
      "Él volvería con ella sin dudarlo.",
      "Nosotros volveríamos a ese hotel.",
      "Vosotros volveríais a empezar de cero.",
      "Ellos volverían a su país si hubiera trabajo."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo vuelva a verte.",
      "Quiero que tú vuelvas pronto.",
      "Es posible que él vuelva mañana.",
      "Ojalá que nosotros volvamos a ganar.",
      "Dudo que vosotros volváis tarde.",
      "Es necesario que ellos vuelvan a clase."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Vuelve a casa!",
      "Vuelva usted mañana.",
      "Volvamos a empezar.",
      "Volved pronto.",
      "Vuelvan a sus asientos."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo volviera a nacer, sería músico.",
      "Quería que tú volvieras pronto.",
      "No creía que él volviera a hacerlo.",
      "Si nosotros volviéramos, todo sería igual.",
      "Dudaba que vosotros volvierais tan rápido.",
      "Era necesario que ellos volvieran a intentar."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he vuelto a casa.",
      "Tú has vuelto a fallar.",
      "Ella ha vuelto con su ex.",
      "Nosotros hemos vuelto a vernos.",
      "Vosotros habéis vuelto a preguntar.",
      "Ellos han vuelto de vacaciones."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había vuelto ayer.",
      "Tú habías vuelto pronto.",
      "Ella había vuelto a casa.",
      "Nosotros habíamos vuelto.",
      "Vosotros habíais vuelto.",
      "Ellos habían vuelto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré vuelto para entonces.",
      "Tú habrás vuelto a verla.",
      "Ella habrá vuelto a empezar.",
      "Nosotros habremos vuelto.",
      "Vosotros habréis vuelto.",
      "Ellos habrán vuelto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría vuelto si pudiera.",
      "Tú habrías vuelto con ella.",
      "Ella habría vuelto sola.",
      "Nosotros habríamos vuelto.",
      "Vosotros habríais vuelto.",
      "Ellos habrían vuelto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya vuelto.",
      "Dudo que tú hayas vuelto.",
      "Es posible que ella haya vuelto.",
      "Ojalá nosotros hayamos vuelto.",
      "No creo que vosotros hayáis vuelto.",
      "Es bueno que ellos hayan vuelto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera vuelto, te vería.",
      "Si tú hubieras vuelto, sabrías.",
      "Si ella hubiera vuelto, estaría.",
      "Si nosotros hubiéramos vuelto, comeríamos.",
      "Si vosotros hubierais vuelto, dormiríais.",
      "Si ellos hubieran vuelto, jugarían."
    ]
  }
};

