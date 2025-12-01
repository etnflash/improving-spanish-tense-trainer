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
    [TenseId.IMPERFECT]: [
      "Yo vivía cerca de la playa antes.",
      "Tú vivías en una calle muy ruidosa.",
      "Ella vivía con sus tíos en esa época.",
      "Nosotros vivíamos en un pueblo pequeño.",
      "Vosotros vivíais felices sin preocupaciones.",
      "Ellos vivían en una casa grande y antigua."
    ],
    [TenseId.FUTURE]: [
      "Yo viviré en el extranjero algún día.",
      "Tú vivirás una vida larga y feliz.",
      "Ella vivirá en Madrid el próximo año.",
      "Nosotros viviremos juntos cuando nos casemos.",
      "Vosotros viviréis aventuras increíbles.",
      "Ellos vivirán cerca de nosotros."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo viviría en la playa si tuviera dinero.",
      "Tú vivirías mejor si hicieras deporte.",
      "Ella viviría sola si no tuviera miedo.",
      "Nosotros viviríamos allí si hubiera trabajo.",
      "Vosotros viviríais más tranquilos en el campo.",
      "Ellos vivirían felices con un perro."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo viva muchos años.",
      "Ojalá que tú vivas cerca de mí.",
      "Es necesario que ella viva su propia vida.",
      "Mis padres quieren que nosotros vivamos con ellos.",
      "No creo que vosotros viváis aquí mucho tiempo.",
      "Es mejor que ellos vivan en la planta baja."
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
      "Ellos serían los primeros en ayudar."
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
    ]
  },
  'estar': {vivía con sus tíos en esa época.",
      "Nosotros vivíamos en un pueblo pequeño.",
      "Vosotros vivíais felices sin preocupaciones.",
      "Ellos vivían en una casa grande y antigua."
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
      "Ella estará lista en cinco minutos.",
      "Nosotros estaremos de vacaciones la próxima semana.",
      "Vosotros estaréis seguros aquí.",
      "Ellos estarán esperando en la estación."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo estaría encantado de ir.",
      "Tú estarías mejor en casa.",
      "Ella estaría triste si no fueras.",
      "Nosotros estaríamos perdidos sin ti.",
      "Vosotros estaríais más cómodos en el sofá.",
      "Ellos estarían de acuerdo conmigo."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo esté en la lista.",
      "Ojalá que tú estés bien.",
      "Es necesario que ella esté presente.",
      "Quieren que nosotros estemos callados.",
      "No creo que vosotros estéis listos.",
      "Es posible que ellos estén ocupados."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Estate quieto!",
      "Esté atento a las noticias.",
      "Estemos unidos en esto.",
      "Estad preparados para todo.",
      "Estén tranquilos, todo saldrá bien."
    ]
  },
  'ir': {la era una gran cantante en su juventud.",
      "Nosotros éramos inseparables.",
      "Vosotros erais muy traviesos.",
      "Ellos eran vecinos nuestros."
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
    ]
  },
  'beber': { un buen día.",
      "Tengamos fe.",
      "Tened paciencia.",
      "Tengan sus pasaportes listos."
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
      "Ellos escribieron un artículo para el periódico."
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
      "Ellos escribirían si supieran la dirección."
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
      "Ellos verán la película mañana."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo vería esa serie si tuviera Netflix.",
      "Tú verías mejor con gafas nuevas.",
      "Él vería el error si prestara atención.",
      "Nosotros veríamos el mundo entero.",
      "Vosotros veríais la diferencia.",
      "Ellos verían que no es fácil."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo vea el cometa.",
      "Quiero que tú veas esto.",
      "Es posible que él vea la señal.",
      "Ojalá que nosotros veamos el mar.",
      "Dudo que vosotros veáis el problema.",
      "Es importante que ellos vean la realidad."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ve a ver quién es!",
      "Vea usted mismo.",
      "Veamos qué pasa.",
      "Ved la película, es buena.",
      "Vean las instrucciones primero."
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
      "Ellos quisieron comprar la casa."
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
      "Ellos querrían quedarse más tiempo."
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
    ]
  },
  'poner': {a propina al camarero.",
      "Demos gracias por la comida.",
      "Dad amor a vuestros hijos.",
      "Den un paso adelante."
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
      "Ellos pondrán un negocio propio."
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
      "Ellos saldrán adelante."
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
    ]
  }
};

