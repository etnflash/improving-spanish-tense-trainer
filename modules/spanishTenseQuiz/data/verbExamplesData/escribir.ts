import { TenseId } from '../../../../types';

export const verb = 'escribir';

const data: Partial<Record<TenseId, string[]>> = {
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
  };

export default data;
